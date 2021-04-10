const express = require('express');
const EchgCtrl = require('../controllers/echangeController');
const Gard = require('../middleware/gard');
const router = express.Router();


// router.post('/addLike', Gard.authGard, ProgCtrl.addLike);
// router.get('/bookmarks/:idUser', Gard.authGard, ProgCtrl.getAllBookmarksByUser);

router.post('/addComment', Gard.authGard, EchgCtrl.addComment);
router.post('/moderateComment', Gard.authGard, Gard.moderateurGard, EchgCtrl.moderateComment);

router.get('/comments/:idRessource', EchgCtrl.getCommentsByIdRessource);

router.post('/askFriend', Gard.authGard, EchgCtrl.askFriend);
router.post('/block', Gard.authGard, EchgCtrl.blockById);

// modification de la bdd pour que ces routes fonctionnent : ajouter INT id_users & INT id_target dans la table messages
router.post('/messages/:userId/send', Gard.authGard, EchgCtrl.sendPrivateMessage);
router.get('/messages/:userId/:targetId', Gard.authGard, EchgCtrl.getPrivateMessages);

router.get('/conversations/:userId', Gard.authGard, EchgCtrl.getConversations);



module.exports = router;