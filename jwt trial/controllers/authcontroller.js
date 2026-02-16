const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const users = require("../data/users.json");

const register=(req,res)=>{
    const {username,password}=req.body;
    const hashpswd=bcrypt.hashSync(password,10);
    const newUser={id:users.length+1,username,password:hashpswd};
    users.push(newUser);
    res.status(201).json({message:'User registered successfully'});
}   
export {register};

const login=(req,res)=>{
    const {username,password}=req.body;
    const user=users.find(u=>u.username===username);

    if(!user) return res.status(404).json({message:'User not found'});

    const isvalid=bcrypt.compareSync(password,user.password);
    if(!isvalid) return res.status(401).json({message:'Invalid password'});
   
    const acesstoken=jwt.sign({username:user.username},process.env.JWT_SECRET,{expiresIn:'1h'});
    res.json({token:acesstoken});

    const refreshtoken=jwt.sign({username:user.username},process.env.JWT_SECRET,{expiresIn:'7d'});
//refresh token implementation
    res.cookie('refresh_token',refreshtoken,{httpOnly:true,secure:true,maxAge:7*24*60*60*1000});
}

export {login};