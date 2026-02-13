const express = require('express');
const router = express.Router();
const checksubscription=require('../middleware/subscription');
const checklogin=require('../middleware/auth');
const path=require('path');

router.post('/login',checklogin,(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','dashboard.html'));
});
router.get('/exam',checksubscription,(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','exam.html'));
});

module.exports=router;
