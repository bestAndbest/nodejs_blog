const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    //角色要么admin，要么普通用户
    role:{
        type:String,
        require:true,
        enum:['admin','general'],
        require:true
    },
    //0是启用状态
    status:{
        type:Number,
        default:0,
    }
});

const User=mongoose.model('User',userSchema);
// User.create({
//     name:'admin',
//     email:'142999@qq.com',
//     password:"123456",
//     role:'admin',
//     status:0
// }).then(res=>console.log('创建成功'))
// .catch(res=>console.log('创建失败'))

module.exports={
    User
}