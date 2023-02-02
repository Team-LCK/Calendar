const express = require('express');
const path = require('path');
const app = express();
const port=5000;
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const {User} =require('./User');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://brian:gusals990^^@cluster0.ubanbwm.mongodb.net/test")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.post('/register',(req,res)=>{
  const user=new User(req.body);
  user.save((err,doc)=>{
    if(err) return res.json({success:false,err});
    return res.status(200).json({
      success:true
    })
  })
})

app.listen(port, function () {
  console.log(`listening on port ${port}`);
}); 