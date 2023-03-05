const express = require('express');
const path = require('path');
const app = express();
const port=5000;
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const {auth}=require('./middleware/auth');
const {User} =require('./User');
const {Todo} = require('./Todolist');
const config=require('./config/key');
const cors = require("cors");
let cors_origin = [`http://localhost:5173`];

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(
  cors({
    origin: cors_origin, // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 
  })
);

mongoose.connect(config.mongoURI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.post('/api/users/register',async (req,res)=>{
  const checkUser=await User.findOne({
    email:req.body.email
  });
  if(checkUser){
    return res.send({
      success:false,
      message:"이미 회원가입된 이메일입니다."
    })
  }
  const user=new User(req.body);
  user.save().then(()=>{
    res.status(200).json({
      success:true
    })
  })
})

app.post('api/users/login',(req,res)=>{

  User.findOne({
    email:req.body.email,

  },(err,userInfo)=>{
    if(!userInfo){
      return res.json({
        loginSuccess:false,
        message:"제공된 이메일에 해당하는 유저가 없음"
      })
    }

    userInfo.comparePassword(req.body.password,(err,isMatch)=>{
      if(!isMatch) 
        return res.json({
          loginSuccess:false,
          message:"비밀번호가 틀렸습니다."
        })
      
        userInfo.generateToken((err,user)=>{
          if(err) return res.status(400).send(err);
          
          res.cookie("x_auth",user.token)
          .status(200)
          .json({
            loginSuccess:true,
            userId:user._id,
            token:user.token
          })
        })
    })

  })
})

app.get('/api/users/auth',auth,(req,res)=>{
  res.status(200).json({
    _id:req.user._id,
    isAuth:true,
    email:req.user.email,
    name:req.user.name
  })
})

app.get('/logout',auth,(req,res)=>{
  User.findOneAndUpdate({
    _id:req.user._id,
  },{token:""},(err,user)=>{
    if(err) return res.json({
      success:false,
      err
    });
    return res.status(200).send({
      success:true
    })
  })
})

app.post('/Todolist', (req,res)=>{
  const todo = new Todo(req.body);
  todo.save((err,doc)=>{
    if(err) return res.json({success:false,err});
    return res.status(200).json({
      success:true
      })  
   })
})



app.get('/api/hello',(req,res)=>{
  res.send("hello");
})

app.listen(port, function () {
  console.log(`listening on port ${port}`);
}); 

