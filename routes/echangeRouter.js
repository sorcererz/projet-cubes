const express = require('express');
const EchgCtrl = require('../controllers/echangeController');
const Gard = require('../middleware/gard');
const router = express.Router();


// router.post('/addLike', Gard.authGard, ProgCtrl.addLike);
// router.get('/bookmarks/:idUser', Gard.authGard, ProgCtrl.getAllBookmarksByUser);

router.post('/addComment', Gard.authGard, EchgCtrl.addComment);
router.post('/moderateComment', Gard.authGard, Gard.moderateurGard, EchgCtrl.moderateComment);

router.get('comments/:idRessource', EchgCtrl.getCommentsByIdRessource);


module.exports = router;