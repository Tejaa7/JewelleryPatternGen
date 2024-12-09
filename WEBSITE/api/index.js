const express = require('express');
const app=express();
const session=require('express-session');
const UserModel=require('./Schema.js');
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
const nodemailer = require('nodemailer'); 
const bcrypt = require('bcrypt')
const path = require('path');
const jwt  = require('jsonwebtoken');
const crypto = require('crypto'); // For generating secure tokens
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const SECRET_TOKEN_JWT="agjigbxbbjkbmAD"
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.urlencoded({ extended: true }));
var islogged=(req)=>{
    const loggedIn = req.session.userid ? true : false;
    return loggedIn
    //had to pass request param to the function to acces the session id
}
app.use(session({
    secret: 'EIUQVYvGzB',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        expires: new Date(Date.now() + 3 * 60 * 60 * 1000)
    }

}));


app.get('/',(req,res)=>{
    res.redirect("/Home")
})



app.set('view engine', 'ejs');

app.get('/Home', (req, res) => {
    const loggedIn = islogged(req);
    res.render('Home.ejs', { loggedin: loggedIn });
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ Username: username });
        if (user && await bcrypt.compare(password, user.Password)) {
            req.session.username = user.Email;
            req.session.userid = user._id;

            const token = jwt.sign(
                { username: username, email: user.Email },
                SECRET_TOKEN_JWT,
                { expiresIn: '3h' }
            );

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 3 * 60 * 60 * 1000)
            });
            return res.status(200).json({
                success: true,
                message: 'Login successful!',
                redirectTo: '/Home',
            });
        }
        return res.status(401).json({
            success: false,
            message: 'Invalid username or password.',
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.',
        });
    }
});
app.get('/login',(req,res)=>{
    res.render('login.ejs');
})
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Failed to destroy session:", err);
            return res.status(500).send("Error logging out. Please try again.");
        }
        res.clearCookie('jwt');
        res.redirect('/Home'); 

    });
});
app.post('/signup', async (req, res) => {
    const { username, email, password, repassword } = req.body;
    if (!username || !email || !password || !repassword) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }
    if (password !== repassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match.' });
    }

    try {
        const existingUser = await UserModel.findOne({
            $or: [{ Username: username }, { Email: email }],
        });

        if (existingUser) {
            if (existingUser.Username === username) {
                return res.status(400).json({ success: false, message: 'Username is already registered.' });
            }

            if (existingUser.Email === email) {
                return res.status(400).json({ success: false, message: 'Email is already registered.' });
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({
            Username: username,
            Email: email,
            Password: hashedPassword,
        });
        return res.status(201).json({ success: true, message: 'Signup successful. Redirecting to login...' });
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ success: false, message: 'Internal server error. Please try again later.' });
    }
});

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail", 
            auth: {
                user: "saiteja.ghankot17@gmail.com", 
                pass: "aacd diqf mrip tlfk", 
            },
        });
        const mailOptions = {
            from: `"Contact Form" <saiteja.ghankot17@gmail.com>`, 
            to: "tejaghankot@gmail.com",
            subject: `New Contact Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: "Failed to send the message. Please try again." });
    }
});
app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})
app.get('/modern',(req,res)=>{
    const loggedIn = islogged(req);
    res.render('modern.ejs', { loggedin: loggedIn });
})

app.get('/traditional',(req,res)=>{
    const loggedIn = islogged(req);
    res.render('traditional.ejs', { loggedin: loggedIn });
    console.log(req.session.userid)
})
//protected endpoint
app.get('/upload',(req,res)=>{
    console.log(req.cookie)
    const loggedIn = islogged(req);
    res.render('upload.ejs', { loggedin: loggedIn });
})
app.get('/contactus',(req,res)=>{
    const loggedIn = islogged(req);
    res.render('contactus.ejs', { loggedin: loggedIn });
})

app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Find the user
        const user = await UserModel.findOne({ Email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "Email not found." });
        }

        // Generate a reset token
        const resetToken = crypto.randomBytes(32).toString("hex");
        const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

        // Set token and expiry in user's record
        user.resetToken = hashedToken;
        user.resetTokenExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
        await user.save();
        const transporter = nodemailer.createTransport({
            service: "Gmail", // Update for your email provider
            auth: {
                user: "saiteja.ghankot17@gmail.com", // Replace with your email
                pass: "aacd diqf mrip tlfk", // Replace with app-specific password
            },
        });

        const mailOptions = {
            from: `"Password Reset" <saiteja.ghankot17@gmail.com>`,
            to: email,
            subject: "Password Reset Request",
            text: `Your reset token is ${resetToken}.Please paste the token.`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Reset link sent to your email." });
    } catch (error) {
        console.error("Error during password reset request:", error);
        res.status(500).json({ success: false, message: "Failed to send the reset link. Please try again." });
    }
});

// Route to reset password
app.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: "Passwords do not match." });
    }

    try {
        // Hash the token and find the user
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
        const user = await UserModel.findOne({
            resetToken: hashedToken,
            resetTokenExpiry: { $gt: Date.now() }, // Ensure token is not expired
        });

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired token." });
        }

        // Update user's password
        user.Password = await bcrypt.hash(password, 10);
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        res.status(200).json({ success: true, message: "Password reset successful. You can now log in with your new password." });
    } catch (error) {
        console.error("Error during password reset:", error);
        res.status(500).json({ success: false, message: "Failed to reset password. Please try again." });
    }
});
app.listen(3000,()=>{
    console.log("Server is running port 3000")
})
