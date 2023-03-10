const {User}=require('../User');

const auth=(req,res,next)=>{

    const token=req.query.cookie;

    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            isAuth:false,
            error:true
        });

        req.token=token;
        req.user=user;
        next();
    })
}

module.exports={auth};