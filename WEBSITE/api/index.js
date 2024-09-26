const express = require('express');
const app=express();
const UserModel=require('./Schema.js');
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');  
app.get('/Home',(req,res)=>{
    res.render('Home.ejs')
})
app.get('/login',(req,res)=>{
    res.render('login.ejs')
})
app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})
app.get('/modern',(req,res)=>{
    res.render('modern.ejs')
})
app.get('/traditional',(req,res)=>{
    res.render('traditional.ejs')
})
app.get('/upload',(req,res)=>{
    res.render('upload.ejs')
})
app.get('/contactus',(req,res)=>{
    res.render('contactus.ejs')
})
app.listen(3000,()=>{
    console.log("Server is running port 3000")
})
