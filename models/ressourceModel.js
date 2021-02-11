
let connexion = require('./db')

class Ressource {



    static getRessource(id = ""){
        return new Promise((resolve, reject) => {

            //req préparé 
            let req = "SELECT * FROM posts"
            req+= id != "" ? " WHERE id_posts = '?'" : ""

            let tab = [id]

            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT Ressource erreur', err);
                    reject(err)  
                }else{   
                resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                console.log('SELECT Ressource ok', result)
                }

    
            })
        })


    }


    static create(ressource) {
        return new Promise((resolve, reject) => {
            // requete préparé
            let req = 'INSERT INTO posts SET title = ?, post_date = ?, content = ?, path = ?, edition_date = ?, status = ?,'
            req += 'visibility = ?, id_users= ?'

            // tab d'insertion dans la req préparée
            let tab = [ressource.title, ressource.post_date, ressource.content, ressource.path, ressource.edition_date, ressource.social_status, ressource.visibility, ressource.id_users]

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

module.exports = Ressource