const EchangeModel = require('../models/echangeModel');


class EchangeController {

    static addComment = (req, res) => {
        EchangeModel.addComment(req.body.userId, req.body.ressourceId, req.body.content)
        .then(result => {
            return res.status(200).json({
                comment : result
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        })
    } // addComment

    static moderateComment = (req, res) => {
        EchangeModel.moderateComment(req.body.commentId)
        .then(result => {
            return res.status(200).json({
                message: 'Commentaire modéré'
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        })
    } // moderateComment

    static getCommentsByIdRessource = (req, res) => {
        EchangeModel.getCommentsByIdRessource(req.params.idRessource)
        .then(result => {
            return res.status(200).json({
                comments : result
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        })
    } // getCommentsByIdRessource
}

module.exports = EchangeController