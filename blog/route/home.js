const express=require('express');
const home=express.Router();

//配置/ ——》在浏览器访问——》localhost:3000/home/ ——》最后的/可以省略 ——》localhost:3000/home
home.get('/',(req,res)=>{
    res.render('home/default');
});
module.exports=home;