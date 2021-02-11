const clRessource = require('../models/ressourceModel')

class RessourceController {
    static createRessource = (req, res, next) => {
        const ressource = {
            title : req.body.title,
            post_date : req.body.post_date,
            content : req.body.content,
            path : req.body.path,
            edition_date : req.body.edition_date, 
            status : req.body.status,
            visibility : req.body.visibility, 
            id_users : req.body.id_users
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
        
    }
    static getRessource = (req, res, next) => {
        clRessource.getRessource()
        .then((result )=> {
            return res.status(200).json({users : result})
        })
        .catch(err => {
            return res.status(400).json({
                error: err
              })
        })

    }
    static getOneRessource = (req, res, next) => {
        
    }
    static deleteRessource = (req, res, next) => {
        return res.status(200).json({message : "Supression ressource"})
    }



}

module.exports = RessourceController