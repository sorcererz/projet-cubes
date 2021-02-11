const express = require('express');
const rscCtrl = require('../controllers/reesourceController')
const router = express.Router();


router.get('/all', rscCtrl.getRessource ); 
router.get('/:id', rscCtrl.getOneRessource); 
router.post('/create', rscCtrl.createRessource); 


module.exports = router;