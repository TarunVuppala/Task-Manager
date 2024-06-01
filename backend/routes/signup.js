const express=require('express');
const app=express();

const User=require('../models/userSchema');

app.post('/',async(req,res)=>{
    const {username,email,password}=req.body;
    const user=await User.findOne({usename:username});
    if(user){
        res.status(404).json({err:"user already exists"});
        return;
    }

    const newUser=await User.create({
        username,email,password
    });
    console.log(newUser);

    res.status(200).json({newUser,success:true})
});

module.exports=app