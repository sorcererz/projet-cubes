const express = require('express');
const ProgCtrl = require('../controllers/progressionController');
const Gard = require('../middleware/gard');
const router = express.Router();

// router.get('/:id', progCtrl.getProgression); // examples
// router.post('/create', progCtrl.updateProgression); 
router.post('/addLike', Gard.authGard, ProgCtrl.addLike);
router.post('/removeLike', Gard.authGard, ProgCtrl.removeLike);

router.post('/addBookmark', Gard.authGard, ProgCtrl.addBookmark);
router.post('/removeBookmark', Gard.authGard, ProgCtrl.removeBookmark);

router.post('/read', Gard.authGard, ProgCtrl.addRead);

router.get('/bookmarks/:idUser', Gard.authGard, ProgCtrl.getAllBookmarksByUser);


module.exports = router;