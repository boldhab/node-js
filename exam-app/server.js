const express = require('express');
const app= express();

const path=require('path');
const logger=require('./middleware/logger');
const examroutes=require('./routes/examroutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));//read from data
app.use(express.static('public'));//to access static files

app.use(logger);

app.use('/api',examroutes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
