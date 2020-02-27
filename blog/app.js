const express=require('express');
const path=require('path');
const app=express();
require('./model/connect');
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');
app.engine('art',require('express-art-template'));


const home=require('./route/home');
const admin=require('./route/admin');


app.use('/home',home);
app.use('/admin',admin);

app.listen(3000,()=>console.log('3000端口'))