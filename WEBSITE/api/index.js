const express = require('express');
const app=express();
const session=require('express-session');
const UserModel=require('./Schema.js');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
// const nodemailer = require('nodemailer'); 
const bcrypt = require('bcrypt')
const path = require('path');
const jwt  = require('jsonwebtoken');
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

// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await UserModel.findOne({ Username: username });
//     if (user && await bcrypt.compare(password, user.Password)) {
//         req.session.username=user.Email;
//         req.session.userid=user._id;
//         var token = jwt.sign({username:username,
//             email:user.Email},SECRET_TOKEN_JWT,{
//                 expiresIn: '3h'
//             });
//         console.log(token);
//         res.cookie("jwt",token,{
//             expires: new Date(Date.now() + 3 * 60 * 60 * 1000),
//             httpOnly:true
//         })
//         // console.log(req.session.userid)

//         return res.redirect('/Home');
//     }
//     res.send('<script>alert("Invalid credentials"); window.history.back();</script>');
    
// })
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
            // Send a success response with redirect information
            return res.status(200).json({
                success: true,
                message: 'Login successful!',
                redirectTo: '/Home',
            });
        }

        // Send an error response if credentials are invalid
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

// app.post('/signup', async(req,res)=>{
//     var username=req.body.username;
//     var email=req.body.email;
//     var password=req.body.password;
//     var final_pass=req.body.repassword;
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(password!==final_pass){
//         res.send('<script>alert("Passwords do not match, please try again."); window.history.back();</script>');
//     }
//     else if(!emailRegex.test(email)){
//         res.send('<script>alert("Invalid email address. Please enter a valid email."); window.history.back();</script>');
//     }
//     else{
//         const hashedPassword = await bcrypt.hash(password, 10);

//         try {
//             await UserModel.create({
//                 Username: username,
//                 Email: email,
//                 Password: hashedPassword
//             });
//             res.send('<script>alert("Successfully signed up! Redirecting to login..."); window.location.href="/login";</script>');
//         } catch (error) {
//             console.log(error);
//             res.send('<script>alert("Error occurred during signup."); window.history.back();</script>');
//         }
//     }
// })
app.post('/signup', async (req, res) => {
    const { username, email, password, repassword } = req.body;

    // Validate required fields
    if (!username || !email || !password || !repassword) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }

    // Check if passwords match
    if (password !== repassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match.' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user in the database
        await UserModel.create({
            Username: username,
            Email: email,
            Password: hashedPassword,
        });

        // Respond with success
        return res.status(201).json({ success: true, message: 'Signup successful. Redirecting to login...' });
    } catch (error) {
        console.error('Error during signup:', error);

        // Handle database errors (e.g., duplicate email/username)
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'Username or email already exists.' });
        }

        // General server error
        return res.status(500).json({ success: false, message: 'Internal server error. Please try again later.' });
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
app.listen(3000,()=>{
    console.log("Server is running port 3000")
})
