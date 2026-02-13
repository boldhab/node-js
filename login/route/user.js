const express = require('express');
const checklogin=require('../middleware/auth');

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message:"Welcome to the user route"
    });
});

router.post('/dashboard',checklogin,(req,res)=>{
    res.json({
        message:"Welcome to the user dashboard"
    });
});
 