require('dotenv').config();
const express = require('express');
const app = express();
const cookiepraser=require('cookie-parser');
const cors=require('cors');

const verifyjwt=require('./middleware/verifyjwt');
app.use(express.json());
app.use(cookiepraser());
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));

app.use('/auth',require('./routes/auth'));
app.use('/notes',verifyjwt,require('./routes/notes'));


app.listen(4000,()=>{
    console.log('Server running on port 4000');
});