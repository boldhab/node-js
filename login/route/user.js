const express = require('express');
const checklogin=require('../middleware/auth');

const router = express.Router();

router.post('/login',checklogin,(req,res)=>{
    res.send("<h1>Welcome to the dashboard</h1>")
});
 
module.exports=router;