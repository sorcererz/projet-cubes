const clStat = require('../models/statModel')
var async = require('async');
var http = require('http');


class StatController {
    
    static getLikes = (req, res, next) => {

        clStat.getNbLikes()
            .then((result) => {
                return res.status(200).json({ statLikes: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getBookmarks = (req, res, next) => {

        clStat.getNbBookmark()
            .then((result) => {
                return res.status(200).json({ statBookmarks: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getReads = (req, res, next) => {

        clStat.getNbRead()
            .then((result) => {
                return res.status(200).json({ statReads: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getPostsForCategory = (req, res, next) => {

        clStat.getNbPostsForCategory()
            .then((result) => {
                return res.status(200).json({ statCategoryPosts: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getSocialStatus = (req, res, next) => {

        clStat.getNbSocialStatus()
            .then((result) => {
                return res.status(200).json({ statSocialStatus: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getComments = (req, res, next) => {

        clStat.getNbComments()
            .then((result) => {
                return res.status(200).json({ statComments: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getSubscribers = (req, res, next) => {

        clStat.getNbSubscribers()
            .then((result) => {
                return res.status(200).json({ statSubscribers: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getRelations = (req, res, next) => {

        clStat.getNbRelations()
            .then((result) => {
                return res.status(200).json({ statRelations: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    // static getAll = (req, res, next) => {
    //     var likes;
    //     var relations;
    //     clStat.getNbLikes()
    //         .then((result) => {
    //             likes = result
    //         }).then(() => {
    //             clStat.getNbRelations()
    //             .then((result) => {
    //                 relations = result
    //             })
    //         }).then(() => { return res.status(200).json({ statLikes: likes, statRelations: relations}) })

    // }


}

module.exports = StatController