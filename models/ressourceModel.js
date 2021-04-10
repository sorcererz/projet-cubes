
let connexion = require('./db')

class Ressource {



    static getRessource(id = "") {
        return new Promise((resolve, reject) => {
            console.log("getRessource");
            //req préparé 
            let req = "SELECT users.name, users.firstname, posts.* FROM posts"
<<<<<<< HEAD
                req+= " INNER JOIN users ON posts.id_users = users.id_users "
=======
            req+= " INNER JOIN users ON posts.id_users = users.id_users "
>>>>>>> fad30efedfa5e28c976c9fe6c239acc9d6193675
            req += id != "" ? " WHERE id_posts = ?" : ""

            let tab = [id]

            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT Ressource erreur', err);
                    reject(err)
                } else {
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
                    console.log('INSERT Ressource erreur', err);
                    reject(err)

                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('INSERT Ressource ok')
                }



            })
        })
    }

    static delete(id = "") { //Supprime le post avec l'id spécifié
        return new Promise((resolve, reject) => {
            //req préparé 
            let req = "DELETE FROM posts WHERE id_posts = ?"

            let tab = [id]

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT Ressource erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static update(ressource, id) { //Supprime le post avec l'id spécifié
        return new Promise((resolve, reject) => {
            // requete préparé
            let req = 'UPDATE posts SET title = ?, post_date = ?, content = ?, path = ?, edition_date = ?, status = ?,'
            req += 'visibility = ?, id_users= ? WHERE id_posts = ?'

            // tab d'insertion dans la req préparée
            let tab = [ressource.title, ressource.post_date, ressource.content, ressource.path, ressource.edition_date, ressource.social_status, ressource.visibility, ressource.id_users, id]

            connexion.query(req, tab, (err, result) => {

                // si erreur on renvoie l'erreur 
                if (err) {
                    console.log('INSERT Ressource erreur', err);
                    reject(err)

                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('INSERT Ressource ok')
                }



            })
        })
    }

    static getRessourceUser(id = "") { //get tous les posts crées par un user
        return new Promise((resolve, reject) => {
            //req préparé 
            let req = "SELECT * FROM posts WHERE id_users = ?"

            let tab = [id]

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT Ressource erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getRessourceCategory() { //get tous les posts appartenant à la catégorie
        return new Promise((resolve, reject) => {
            //req préparé 
            let req = "SELECT * FROM cube.posts LEFT JOIN cube.belongs ON posts.id_posts = belongs.id_posts WHERE belongs.id_categories = ? group by posts.id_posts ORDER BY posts.id_posts;"

            let tab = []

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT Ressource erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getRessourceRestreinte() { //get tous les posts avec le status desactivé
        return new Promise((resolve, reject) => {
            //req préparé 
            let req = "SELECT * FROM cube.posts WHERE status = 1"

            connexion.query(req, (err, result) => {// si erreur on renvoie l'erreur
                if (err) {
                    console.log('SELECT Ressource erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getRessourceNew() { //get tous les posts ordonnés par les plus nouveaux
        return new Promise((resolve, reject) => {
            //req préparé 
            let req = "SELECT * FROM cube.posts ORDER BY post_date DESC;"

            connexion.query(req, (err, result) => {// si erreur on renvoie l'erreur
                if (err) {
                    console.log('SELECT Ressource erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getRessourceOld() { //get tous les posts ordonnés par les plus vieux
        return new Promise((resolve, reject) => {
            //req préparé 
            let req = "SELECT * FROM cube.posts ORDER BY post_date ASC;"

            connexion.query(req, (err, result) => {// si erreur on renvoie l'erreur
                if (err) {
                    console.log('SELECT Ressource erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

}

module.exports = Ressource