const express = require('express');
const app=express();
const session=require('express-session');
const UserModel=require('./Schema.js');
// const nodemailer = require('nodemailer'); 
const path = require('path');
const jwt  = require('jsonwebtoken');
const bcrypt = require('bcrypt')
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
        secure: false
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
    const user = await UserModel.findOne({ Username: username });
    if (user && await bcrypt.compare(password, user.Password)) {
        req.session.username=user.Email;
        req.session.userid=user._id;
        var token = jwt.sign({username:username,
            email:user.Email},SECRET_TOKEN_JWT,{
                expiresIn: '3h'
            });
        console.log(token);
        res.cookie("jwt",token,{
            httpOnly:true
        })
        // console.log(req.session.userid)

        return res.redirect('/Home');
    }
    res.send('<script>alert("Invalid credentials"); window.history.back();</script>');
    
})
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

app.post('/signup', async(req,res)=>{
    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
    var final_pass=req.body.repassword;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(password!==final_pass){
        res.send('<script>alert("Passwords do not match, please try again."); window.history.back();</script>');
    }
    else if(!emailRegex.test(email)){
        res.send('<script>alert("Invalid email address. Please enter a valid email."); window.history.back();</script>');
    }
    else{
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            await UserModel.create({
                Username: username,
                Email: email,
                Password: hashedPassword
            });
            res.send('<script>alert("Successfully signed up! Redirecting to login..."); window.location.href="/login";</script>');
        } catch (error) {
            console.log(error);
            res.send('<script>alert("Error occurred during signup."); window.history.back();</script>');
        }
    }
})
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
