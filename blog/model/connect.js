const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/learn', { useNewUrlParser: true , useUnifiedTopology: true })
.then(res=>console.log('数据库连接成功'))
.catch(res=>console.log('数据库连接失败'))