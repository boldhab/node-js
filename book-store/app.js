const express=require('express');
const app=express();
const path=require('path');

const pageroutes=require('./routes/page');
const bookroutes=require('./routes/book');
const userroutes=require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({extended:true}));   
app.use('/static', express.static(path.join(__dirname,'public')));

app.use('/',pageroutes);
app.use('/api/books',bookroutes);
app.use('/users',userroutes);

const PORT=process.env.PORT || 3000;
const server=app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

