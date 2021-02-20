const express = require('express');
const rscCtrl = require('../controllers/reesourceController')
const router = express.Router();

// middleware permettant de vérifier si un user est bien authentifié 
const gard = require('../middleware/gard') 


router.get('/all', rscCtrl.getRessource ); 
router.get('/:idRessource', rscCtrl.getOneRessource); 
router.post('/create', rscCtrl.createRessource); 


module.exports = router;