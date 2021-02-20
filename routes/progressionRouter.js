const express = require('express');
const progCtrl = require('../controllers/progressionController')
const router = express.Router();

// router.get('/:id', progCtrl.getProgression); // examples
// router.post('/create', progCtrl.updateProgression); 
router.post('/addLike/:ressourceId', progCtrl.addLike);

module.exports = router;