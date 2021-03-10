let connexion = require('./db');


class Echange {

    static addComment(userId, ressourceId, content) {
        return new Promise((resolve, reject) => {
            let req = 'INSERT INTO comments ';
                req+= 'SET id_users = ?, id_posts = ?, content = ?, date_comment = Now(), status = 1';

            let params = [...arguments];

            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('insert commentaire erreur', err);
                    reject(err);
                }
                else {
                    console.log('insert commentaire ok', result);
                    resolve(result);
                }
            });
        });
    } // addComment

    static moderateComment(id) {
        return new Promise((resolve, reject) => { // status 2 = modéré
            let req = 'UPDATE comments SET status = 2 WHERE id_comments = ?';

            connexion.query(req, [id], (err, result) => {
                if (err) {
                    console.log('modérer commentaire erreur', err);
                    reject(err);
                }
                else {
                    console.log('modérer commentaire ok', result);
                    resolve(result);
                }
            });
        });
    } // moderateComment

    static getCommentsByIdRessource(id) {
        return new Promise((resolve, reject) => {
            let req = 'SELECT * FROM comments WHERE id_posts = ? AND status = 1 ORDER BY date_comment ASC';

            let params = [id];
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('get commentaire erreur', err);
                    reject(err);
                }
                else {
                    console.log('get commentaires ok', result);
                    resolve(result);
                }
            });
        });
    } // getCommentsByIdRessource
}


module.exports = Echange;