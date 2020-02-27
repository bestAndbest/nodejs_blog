const express=require('express');
const admin=express.Router();

//配置/ ——》在浏览器访问——》localhost:3000/home/ ——》最后的/可以省略 ——》localhost:3000/home
admin.get('/login',(req,res)=>{
    res.render('admin/login');
});
admin.get('/user',(req,res)=>{
    res.render('admin/user');
});
module.exports=admin;