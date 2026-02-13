const express = require('express');
const userroutes=require('./route/user');
const app = express();


app.use(express.json());

app.use(express.urlencoded({extended:true}));//read from data
app.use(express.static('public'));//to access static files

app.use('/api',userroutes);

app.use((req,res,next)=>{
    const err=new Error("Not Found");
    err.status=404;
    next(err);
});

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        error:{ 
            message:err.message
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});