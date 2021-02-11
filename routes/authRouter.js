const express = require('express');
const UserCtrl = require('../controllers/userController')
const router = express.Router();


router.post('/login', UserCtrl.login ); 
router.post('/signin', UserCtrl.createUser); 

module.exports = router;
