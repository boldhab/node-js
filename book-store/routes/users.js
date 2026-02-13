const express = require('express');
const router = express.Router();
const path=require('path');

router.get('/',(req,res)=>{ 
    // Send simple text response
    res.send("All Users");  
});

router.get('/:id',(req,res)=>{ 
    // Send simple text response
    res.send(`User with ID ${req.params.id}`);  
});

module.exports=router;
