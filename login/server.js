const express = require('express');
const userroutes=require('./route/user');
const app = express();


app.use(express.json());
app.use('/api',userroutes);