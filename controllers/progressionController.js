const ProgressionModel = require('../models/progressionModel');


class ProgressionController {

    static addLike = (req, res, next) => {
        ProgressionModel.addLike(req.body.userId, req.body.ressourceId)
        .then(()=> {
            return res.status(200).json({
                message : "Ressource liked"
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // addLike

    static removeLike = (req, res, next) => {
        ProgressionModel.removeLike(req.body.userId, req.body.ressourceId)
        .then(()=> {
            return res.status(200).json({
                message : "Ressource unliked"
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // removeLike


    static addBookmark = (req, res, next) => {
        ProgressionModel.addBookmark(req.body.userId, req.body.ressourceId)
        .then(()=> {
            return res.status(200).json({
                message : "Ressource bookmarked"
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // addBookmark

    static removeBookmark = (req, res, next) => {
        ProgressionModel.removeBookmark(req.body.userId, req.body.ressourceId)
        .then(()=> {
            return res.status(200).json({
                message : "Ressource removed from bookmarks"
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // removeBookmark


    static addRead = (req, res, next) => {
        ProgressionModel.addRead(req.body.userId, req.body.ressourceId)
        .then(()=> {
            return res.status(200).json({
                message : "Ressource read"
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // addBookmark

    static getAllBookmarksByUser = (req, res) => {
        ProgressionModel.getAllBookmarksByUser(req.params.userId)
        .then(result => {
            return res.status(200).json({
                ressources : result
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // getAllBookmarks
}

module.exports = ProgressionController