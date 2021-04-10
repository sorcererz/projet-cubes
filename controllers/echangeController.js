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

    static askFriend = (req, res) => {
        EchangeModel.addFriend(req.body.userId, req.body.friendId)
        .then(result => {
            return res.status(200).json({
                message: 'requête ami envoyée'
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // askFriend

    static blockById = (req, res) => {
        EchangeModel.blockById(req.body.userId, req.body.blockId)
        .then(result => {
            return res.status(200).json({
                message: 'personne bloquée'
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // blockById

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

    static sendPrivateMessage = (req, res) => {
        console.log('req.body ', req);
        EchangeModel.sendPrivateMessage(req.body.userId, req.body.targetId, req.body.content)
        .then(result => {
            return res.status(200).json({
                message: result
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
    } // sendPrivateMessage

    static getPrivateMessages = (req, res) => {
        EchangeModel.getPrivateMessages(req.params.userId, req.params.targetId)
        .then(result => {
            return res.status(200).json({
                messages: result
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        })
    } // getPrivateMessages

    static getConversations = (req, res) => {
        EchangeModel.getConversations(req.params.userId)
        .then(result => {
            return res.status(200).json({
                conversations: result
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        })
    } // getConversations
}

module.exports = EchangeController