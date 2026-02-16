const router=require('express').Router();
const {register,login}=require('../controllers/authcontroller');
const refresh=require('../controllers/refreshcontroler');
const logout=require('../controllers/logoutcontroller');    
router.post('/register',register);
router.post('/login',login);
router.post('/refresh',refresh);
router.post('/logout',logout);  
module.exports=router;

