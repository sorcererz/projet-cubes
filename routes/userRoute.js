const express = require('express');
const UserCtrl = require('../controllers/userController')
const router = express.Router();

// middleware permettant de vérifier si un user est bien authentifié 
const Gard = require('../middleware/gard') 


router.get('/:idUser/all',Gard.authGard, Gard.moderateurGard,  UserCtrl.getUsers ); 
router.get('/:idUser/:idSearch', Gard.authGard, UserCtrl.getOneUser); 
router.put('/:idUser', Gard.authGard, UserCtrl.updateUser); 

//router.post('/create', UserCtrl.createUser); 


module.exports = router;