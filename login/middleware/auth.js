function checklogin(req,res,next){
    const {username,password}=req.body;
    const validUsername="admin";
    const validPassword="password123";

    if(username===validUsername && password===validPassword){
        next();
    }else{
       const err=new Error("Invalid username or password");
         err.status=401;
            next(err); //send erro to error handling middleware
    }   
}

module.exports=checklogin;