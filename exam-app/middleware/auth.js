function checklogin(req,res,next){
    const {username,password}=req.body;
    if(username==="admin" && password==="admin123"){

         // Save user info globally for simple demo flow
        req.app.locals.user = {
            name: "Student",
            subscription: "active"
        };

        next();
    }else{
        res.send("<h2>Login Failed</h2><a href='/login.html'>Try Again</a>");
    } 
}

module.exports=checklogin;