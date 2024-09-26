const express = require('express');
const app=express();
const UserModel=require('./Schema.js');
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');  
app.get('/contactus',(req,res)=>{
    res.render('contactus.ejs')
})
app.listen(3000,()=>{
    console.log("Server is running port 3000")
})
