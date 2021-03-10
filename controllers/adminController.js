const bcrypt = require('bcrypt')
const clAdmin = require('../models/adminModel')
const jwt = require('jsonwebtoken')


class AdminController {
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

                clAdmin.create(user)
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


    static getAmdin = (req, res, next) => {
        console.log("getAmdin");
        clAdmin.getAmdin()
        .then((result )=> {
            return res.status(200).json({users : result})
        })
        .catch(err => {
            return  res.status(400).json({
                error: err
              })
        })

    }
    static getOneAdmin = (req, res, next) => {
        return res.status(200).json({message : "1 user"})
    }
    static deletAdmin = (req, res, next) => {
        return res.status(200).json({message : "Supression user"})
    }


    static login = (req, res, next) => {
        clAdmin.login(req.body.email)
        .then( user => {
           if (!user) {
               return res.status(401).json({error: "L'association de  l'email et du mdp est invalide"})
           }

         
           bcrypt.compare(req.body.password, user[0].password)
           .then( ok =>{
               if (!ok ) {
                return res.status(401).json({error: "L'association de l'email et du mdp est invalide"})
               }
               return res.status(200).json(
                   {
                       user_id : user[0].id_users, 
                       token: jwt.sign(
                           {user_id: user[0].id_users, role: user[0].id_roles},
                           "RANDOM_TOKEN_SECRET",
                           {expiresIn: '24h'}
                           )
                    }
                )
           } )

           
        })
        .catch(err => {  res.status(400).json({error: err}) })
    }

    static setRole = (req, res, next) => {
        clAdmin.setRole(req.body.userId, req.body.idRole)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({error: err}) )
    }


    static setStatusRresource = (req, res, next) => {
        clAdmin.setStatusRresource(req.body.ressId, req.body.supend)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({error: err}) )
    }

    static addCategory = (req, res, next) => {
        clAdmin.addCategory(req.body.lib)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({error: err}) )
    }

    
    static setUserAccountStatus = (req, res, next) => {
        clAdmin.setUserAccountStatus(req.body.userId, req.body.activated)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({error: err}) )
    }



}

module.exports = AdminController