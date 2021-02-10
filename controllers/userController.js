
const clUser = require('../models/userModel')

class UserController {
    static createUser = (req, res, next) => {
        const user = {
            name : req.body.name,
            firstname : req.body.firstname,
            email : req.body.email,
            birhtdate : req.body.birhtdate,
            sex : req.body.sex, 
            social_stauts : req.body.social_stauts,
            progression : req.body.progression, 
            city : req.body.city,
            postcode: req.body.postcode, 
            status : req.body.status, 
            id_roles : req.body.id_roles,
            id_social_status : req.body.id_social_status
        }
     
        

        clUser.create(user)
        .then(() => {
            res.status(201).json({
                message: 'Nouvelle utilisateur créee'
              })
        })
        .catch(err => {
            res.status(400).json({
                error: err
              })
        })

        
    }
    static updateUser = (req, res, next) => {
        
    }
    static getUsers = (req, res, next) => {
        clUser.getUser()
        .then((result )=> {
            res.status(200).json({users : result})
        })
        .catch(err => {
            res.status(400).json({
                error: err
              })
        })

    }
    static getOneUser = (req, res, next) => {
        
    }
    static deleteUser = (req, res, next) => {
    
    }
}

module.exports = UserController