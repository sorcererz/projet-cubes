const bcrypt = require('bcrypt')
const clUser = require('../models/userModel')

class UserController {
    static createUser = (req, res, next) => {

        // crypt mdp avant insertion bdd
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = {
                    name: req.body.name,
                    firstname: req.body.firstname,
                    email: req.body.email,
                    password: hash,
                    birhtdate: req.body.birhtdate,
                    sex: req.body.sex,
                    social_status: req.body.social_status,
                    progression: req.body.progression,
                    city: req.body.city,
                    postcode: req.body.postcode,
                    status: req.body.status,
                    id_roles: req.body.id_roles,
                    id_social_status: req.body.id_social_status
                }

                clUser.create(user)
                    .then(() => {
                        res.status(201).json({
                            message: 'utilisateur créee'
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            error: err
                        })
                    })
            })
            .catch(err => res.status(500).json({ err }))




    }
    static updateUser = (req, res, next) => {
        
    }
    static getUsers = (req, res, next) => {
        clUser.getUser()
        .then((result )=> {
            return res.status(200).json({users : result})
        })
        .catch(err => {
            return  res.status(400).json({
                error: err
              })
        })

    }
    static getOneUser = (req, res, next) => {
        
    }
    static deleteUser = (req, res, next) => {
        return res.status(200).json({message : "Supression user"})
    }
    static getRessources = (req, res, next) => {
        return res.status(200).json({ressource : "Ressource"})
    }

    static login = (req, res, next) => {
        clUser.login(req.body.email)
        .then( user => {
           if (!user) {
               return res.status(401).json({error: "L'association de  l'email et du mdp est invalide"})
           }

         
           bcrypt.compare(req.body.password, user[0].password)
           .then( ok =>{
               if (!ok ) {
                return res.status(401).json({error: "L'association de l'email et du mdp est invalide"})
               }
               return res.status(200).json({user_id : user[0].id_users, token: "TOKEN"})
           } )

           
        })
        .catch(err => {
            return  res.status(400).json({error: err})
        })
    }



}

module.exports = UserController