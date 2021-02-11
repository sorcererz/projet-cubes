const express = require('express');
const UserCtrl = require('../controllers/userController')
const router = express.Router();


router.get('/all', UserCtrl.getUsers ); 
router.get('/:id', UserCtrl.getOneUser); 
//router.post('/create', UserCtrl.createUser); 


module.exports = router;