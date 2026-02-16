const jwt=require('jsonwebtoken');
const verifyjwt=(req,res,next)=>{
    const authheader=req.headers['authorization'];
    if(!authheader) return res.status(401).json({message:'No token provided'});

    const token=authheader.split(' ')[1];
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{   
       if(err) return res.status(403).json({message:'Invalid token'});
       
       req.user=decoded.username;
       next();
    });
}