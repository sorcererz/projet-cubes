
let connexion = require('./db')

class User {


    constructor(name, firstname, email, birthdate, sex, social_status, progression, city, postcode, status, id_roles, id_social_status ){
        this.name = name, 
        this.firstname = firstname,
        this.email = email, 
        this.birthdate = birthdate,
        this.sex = sex, 
        this.social_status = social_status,
        this.progression = progression, 
        this.firstname = firstname,
        this.city = city, 
        this.postcode = postcode,
        this.status = status, 
        this.id_roles = id_roles,
        this.sex = sex, 
        this.social_status = social_status,
        this.id_social_status = id_social_status
        
    }

    static getUser(id = ""){
        return new Promise((resolve, reject) => {

            //req préparé 
            let req = "SELECT * FROM userss"
            req+= id != "" ? " WHERE id_users = '?'" : ""

            let tab = [id]

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
            // requete préparé
            let req = 'INSERT INTO users SET name = ?, firstname = ?, email = ?, birthdate = ?, sex = ?, progression = ?,'
            req += 'city = ?, postcode= ?, status = ?, id_roles = ?, social_status = ?,  id_social_status = ? '

            // tab d'insertion dans la req préparée
            let tab = [user.name, user.firstname, user.email, user.birthdate, user.sex, user.social_status, user.progression, user.city, user.postcode, user.status, user.id_roles, user.id_social_status]

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

}

module.exports = User