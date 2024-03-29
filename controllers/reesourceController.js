const clRessource = require('../models/ressourceModel')

class RessourceController {
    static createRessource = (req, res, next) => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        const ressource = {
            title: req.body.title,
            post_date:  today.toISOString(), 
            content: req.body.content,
            path: req.body.path,
            edition_date: today.toISOString(),
            status: 1,
            visibility: req.body.visibility,
            id_users: req.body.id_users
        }



        clRessource.create(ressource)
            .then(() => {
                return res.status(201).json({
                    message: 'Ressource crée'
                })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })


    }

    static updateRessource = (req, res, next) => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        const ressource = {
            id_posts:  req.body.id_posts,
            title: req.body.title,
            content: req.body.content,
            path: req.body.path,
            edition_date: today.toISOString(),
            visibility: req.body.visibility
        }



        clRessource.update(ressource, req.body.id_posts)
            .then(() => {
                return res.status(201).json({
                    message: 'Ressource mise à jour'
                })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })

    }

    static getRessource = (req, res, next) => {
        console.log('get ressource controller');
        clRessource.getRessource()
            .then((result) => {
                return res.status(200).json({ ressources: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })

    }

    static getOneRessource = (req, res, next) => {
        console.log('get one ressource controller');
        clRessource.getRessource(req.params.id)
            .then((result) => {
                if (!result.length || !result) {
                    return res.status(404).send({ message: 'Not Found' });
                }
                return res.status(200).json({ ressource: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static deleteRessource = (req, res, next) => {
        clRessource.delete(req.body.id_posts)
            .then(() => {
                return res.status(200).json({ message: "Supression ressource" })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })

    }

    static getRessourceUser = (req, res, next) => {
        clRessource.getRessourceUser(req.params.id)
            .then((result) => {
                if (!result.length || !result) {
                    return res.status(404).send({ message: 'Not Found' });
                }
                return res.status(200).json({ ressource: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getRessourceCategory = (req, res, next) => {
        clRessource.getRessourceCategory(req.params.id)
            .then((result) => {
                if (!result.length || !result) {
                    return res.status(404).send({ message: 'Not Found' });
                }
                return res.status(200).json({ ressource: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getRessourceRestreinte = (req, res, next) => {
        clRessource.getRessourceRestreinte()
            .then((result) => {
                if (!result.length || !result) {
                    return res.status(404).send({ message: 'Not Found' });
                }
                return res.status(200).json({ ressources: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })

    }

    static getRessourceNew = (req, res, next) => {
        console.log('get ressource new controller');
        clRessource.getRessourceNew()
            .then((result) => {
                if (!result.length || !result) {
                    return res.status(404).send({ message: 'Not Found' });
                }
                return res.status(200).json({ ressources: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    }

    static getRessourceOld = (req, res, next) => {
        console.log('get ressource old controller');
        clRessource.getRessourceOld()
            .then((result) => {
                if (!result.length || !result) {
                    return res.status(404).send({ message: 'Not Found' });
                }
                return res.status(200).json({ ressources: result })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })

    }



}

module.exports = RessourceController