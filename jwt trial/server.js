require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const verifyJwt = require('./middleware/verifyjwt');
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use('/auth', require('./routes/authroutes'));
app.use('/notes', verifyJwt, require('./routes/noteroutes'));


app.listen(4000, () => {
    console.log('Server running on port 4000');
});
