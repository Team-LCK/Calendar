const express = require('express');
const path = require('path');
const app = express();
const port=5000;
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const {auth}=require('./middleware/auth');
const {User} =require('./User');
const cors=require("cors");
const config=require('./config/key');
const cors_origin=["http://localhost:3000"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin:cors_origin,
    credentials:true,
  })
);

mongoose.connect(config.mongoURI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.post('/api/users/register',(req,res)=>{
  const user=new User(req.body);
  user.save((err,doc)=>{
    if(err) return res.json({success:false,err});
    return res.status(200).json({
      success:true
    })
  })
})

app.post('/api/users/login',(req,res)=>{

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
            userId:user._id
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

app.get('/api/users/logout',auth,(req,res)=>{
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

app.get('/api/hello',(req,res)=>{
  res.send("hello");
})

app.listen(port, function () {
  console.log(`listening on port ${port}`);
}); 