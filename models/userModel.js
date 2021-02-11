
let connexion = require('./db')

class User {


    static getUser(id = ""){
        return new Promise((resolve, reject) => {

            //req préparé 
            let req = "SELECT * FROM users"
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


    static login(email){
        return new Promise((resolve, reject) => {

            //req préparé 
            let req = "SELECT id_users, password, email FROM users WHERE email = ?"

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

}

module.exports = User