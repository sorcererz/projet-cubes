const express = require('express');
const AmdinCtrl = require('../controllers/adminController')
const router = express.Router();

// middleware permettant de vérifier si un user est bien authentifié 
const Gard = require('../middleware/gard') 


//router.get('/:idUser/all',Gard.authGard, Gard.moderateurGard,  UserCtrl.getUsers ); 
//router.get('/:idUser/:idSearch', Gard.authGard, UserCtrl.getOneUser); 
router.post('/:idUser/role',Gard.authGard, Gard.adminGard,  AmdinCtrl.setRole ); 
router.patch('/:idUser/statusRresource',Gard.authGard, Gard.adminGard,  AmdinCtrl.setStatusRresource ); 
router.post('/:idUser/category',Gard.authGard, Gard.adminGard,  AmdinCtrl.addCategory ); 
router.patch('/:idUser/userAccountStatus',Gard.authGard, Gard.adminGard,  AmdinCtrl.setUserAccountStatus ); 
router.post('/:idUser/create',Gard.authGard, Gard.superAdminhGard, AmdinCtrl.createUser ); 


module.exports = router;