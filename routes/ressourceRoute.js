const express = require('express');
const rscCtrl = require('../controllers/reesourceController')
const router = express.Router();

// middleware permettant de vérifier si un user est bien authentifié 
const gard = require('../middleware/gard') 


router.get('/all', rscCtrl.getRessource);
router.post('/create', rscCtrl.createRessource);
router.post('/update', rscCtrl.updateRessource);
router.delete('/delete', rscCtrl.deleteRessource);
router.get('/user/:id', rscCtrl.getRessourceUser);
router.get('/category/:id', rscCtrl.getRessourceCategory);
router.get('/restreint', rscCtrl.getRessourceRestreinte);
router.get('/recent', rscCtrl.getRessourceNew);
router.get('/ancien', rscCtrl.getRessourceOld);
router.get('/:id', rscCtrl.getOneRessource);


module.exports = router;