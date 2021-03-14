const express = require('express');
const StatCtrl = require('../controllers/statController')
const router = express.Router();

// router.get('/all', StatCtrl.getAll);
router.get('/read', StatCtrl.getReads);
router.get('/bm', StatCtrl.getBookmarks);
router.get('/likes', StatCtrl.getLikes);
router.get('/category', StatCtrl.getPostsForCategory);
router.get('/socialstat', StatCtrl.getSocialStatus);
router.get('/comments', StatCtrl.getComments);
router.get('/subscribers', StatCtrl.getSubscribers);
router.get('/relations', StatCtrl.getRelations);


module.exports = router;