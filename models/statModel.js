let connexion = require('./db')

class Stat {


    static getNbLikes() { //get tous les posts ordonnés par leur nombre de likes
        return new Promise((resolve, reject) => {
            let tab = []
            let req = "SELECT posts.id_posts, posts.title , SUM(browses.likes) AS nombre_likes  FROM cube.posts LEFT JOIN cube.browses ON posts.id_posts = browses.id_posts group by posts.id_posts ORDER BY nombre_likes DESC;";

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT STAT erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }


    static getNbBookmark() { //get tous les posts ordonnés par le nombre de fois où ils ont été bookmark
        return new Promise((resolve, reject) => {
            let tab = []
            let req = "SELECT posts.id_posts, posts.title , SUM(browses.bookmark) AS nombre_bookmark  FROM cube.posts LEFT JOIN cube.browses ON posts.id_posts = browses.id_posts group by posts.id_posts ORDER BY nombre_bookmark DESC";

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT STAT erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getNbRead() { //get tous les posts ordonnés par le nombre de fois où ils ont été lus
        return new Promise((resolve, reject) => {
            let tab = []
            let req = "SELECT posts.id_posts, posts.title , SUM(browses.read) AS nombre_read  FROM cube.posts LEFT JOIN cube.browses ON posts.id_posts = browses.id_posts group by posts.id_posts ORDER BY nombre_read DESC;";

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT STAT erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getNbPostsForCategory() { //get toutes les catégories ordonnés par leur nombre de posts
        return new Promise((resolve, reject) => {
            let tab = []
            let req = "SELECT categories.id_categories, categories.libelle , COUNT(belongs.id_posts) AS nombre_posts  FROM cube.categories LEFT JOIN cube.belongs ON categories.id_categories = belongs.id_categories group by categories.id_categories ORDER BY nombre_posts DESC;";

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT STAT erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getNbSocialStatus() { //get tous les social status ordonnés par leur nombre d'users qui les possèdes
        return new Promise((resolve, reject) => {
            let tab = []
            let req = "SELECT social_status.id_social_status, social_status.libelle , COUNT(users.social_status) AS nombre_social_status  FROM cube.social_status LEFT JOIN cube.users ON social_status.id_social_status = users.social_status group by social_status.id_social_status ORDER BY nombre_social_status DESC;";

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT STAT erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getNbComments() { //get tous les posts ordonnés par leur nombre de commentaires
        return new Promise((resolve, reject) => {
            let tab = []
            let req = "SELECT posts.id_posts, posts.title , COUNT(comments.id_comments) AS nombre_comments  FROM cube.posts LEFT JOIN cube.comments ON posts.id_posts = comments.id_posts group by posts.id_posts ORDER BY nombre_comments DESC";

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT STAT erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getNbSubscribers() { //get toutes les catégories ordonnés par leur nombre de subscribers
        return new Promise((resolve, reject) => {
            let tab = []
            let req = "SELECT categories.id_categories, categories.libelle , COUNT(subscribes.id_users) AS nombre_subscribers  FROM cube.categories LEFT JOIN cube.subscribes ON categories.id_categories = subscribes.id_categories group by categories.id_categories ORDER BY nombre_subscribers DESC;";

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT STAT erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

    static getNbRelations() { //get toutes les relations ordonnés par le nombre d'utilisateurs qui les a
        return new Promise((resolve, reject) => {
            let tab = []
            let req = "SELECT relations.id_relations, relations.libelle , COUNT(has.id_users) AS nombre_relations  FROM cube.relations LEFT JOIN cube.has ON relations.id_relations = has.id_relations group by relations.id_relations ORDER BY nombre_relations DESC;";

            connexion.query(req, tab, (err, result) => {// si erreur on renvoie l'erreur 
                if (err) {
                    console.log('SELECT STAT erreur', err);
                    reject(err)
                } else {
                    resolve(result) // si tout ce passe bien on renvoie le resulat sql 
                    console.log('SELECT ok', result)
                }

            })
        })
    }

}

module.exports = Stat