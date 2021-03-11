
const { sign } = require('jsonwebtoken')
let connexion = require('./db')

class Admin {


    static getAmdin(id = ""){
        return new Promise((resolve, reject) => {

            //req préparé 
            let req = "SELECT * FROM users INNER JOIN roles on users.id_roles = roles.id_roles "
            req += "WHERE roles.id_roles in (3, 4) "
            req+= id != "" ? " AND id_users = '?'" : ""

            let tab = [id]

            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT ADMIN erreur', err);
                    reject(err)  
                }else{   
                resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                console.log('SELECT ADMIN  ok', result)
                }

    
            })
        })

        


    }

    


    static login(email){
        return new Promise((resolve, reject) => {

            if (!email) {
                console.log('login', "l'email ne peut etre vide")
                return reject("l'email ne peut etre vide")
            }

            //req préparé 
            let req = "SELECT id_users, password, email, id_roles FROM users WHERE email = ?"

            let tab = [email]

            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT USER erreur', err);
                    reject(err)  
                }else{   
                resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                console.log('SELECT ok', result)
                }

    
            })
        })

        


    }


    static create(user) {
        return new Promise((resolve, reject) => {

            if (!user) {
                console.log('create', "l'objet user ne peut etre vide")
                return reject("l'objet user ne peut etre vide")
            }

            // requete préparé
            let req = 'INSERT INTO users SET name = ?, firstname = ?, email = ?, password = ?,  birthdate = ?, sex = ?, progression = ?,'
            req += 'city = ?, postcode= ?, status = ?, id_roles = ?,  id_social_status = ? '

            // tab d'insertion dans la req préparée
            let tab = [user.name, user.firstname, user.email, user.password, user.birthdate, user.sex, user.progression, user.city, user.postcode, user.status, user.id_roles, user.id_social_status]

            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('INSERT USER erreur', err);
                    reject(err)
                    
                }else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('INSERT USER ok')
                }



            })
        })
    }

    static setRole(idUser, idNewRole) {
        return new Promise((resolve, reject) => {

            
            if (!idUser || !idNewRole) {
                console.log('setRole', "l'i de l'utilisateur ou le nouveau role de l'utilisateur ne peuvent être nul")
                return reject("L'id de la ressource ne peut être vide")
            }

            // requete préparé
            let req = 'UPDATE users SET id_roles = ?  where id_users = ? '

            // tab d'insertion dans la req préparée
            let tab = [idNewRole, idUser]
            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('setRole', err);
                    reject(err)
                    
                }else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('setRole ok')
                }


            })
        })
    }

    static setStatusRresource(idRessource, supend ) {
        return new Promise((resolve, reject) => {

            if (!idRessource) {
                console.log('setStatusRresource', "L'id de la ressource ne peut être vide")
                return reject("L'id de la ressource ne peut être vide")
            }
            
            let status = supend === false ? 0 : 1 

            // requete préparé
            let req = `UPDATE posts SET status = ?  where id_post = ? `

            // tab d'insertion dans la req préparée
            let tab = [status, idRessource]
            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('setStatusRresource', err);
                    reject(err)
                    
                }else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('setStatusRresource ok')
                }



            })
        })
    }

    static addCategory(libCategory) {

        return new Promise((resolve, reject) => {

            
            if (!libCategory) {
                console.log('addCategory', 'Le libellé ne peut être vide')
                return reject('Le libellé ne peut être vide')
            }

            // requete préparé
            let req = `INSERT INTO categories ( libelle ) VALUES (?)`

            // tab d'insertion dans la req préparée
            let tab = [libCategory]
            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('addCategory', err);
                    reject(err)
                    
                }else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('addCategory ok')
                }



            })
        })
    }


    static setUserAccountStatus(idUser, actived) {

        return new Promise((resolve, reject) => {

            if (!idUser) {
                console.log('setUserAccountStatus', "l'id ne peut être vide")
                reject("l'id ne peut être vide")
            }
            
            let status = actived === false ? 0 : 1

            // requete préparé
            let req = `UPDATE users SET status= ? WHERE  id_users = ?`

            // tab d'insertion dans la req préparée
            let tab = [status, idUser ]
            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('setUserAccountStatus', err);
                    reject(err)
                    
                }else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('setUserAccountStatus ok')
                }

            })
        })
    }

}

module.exports = Admin