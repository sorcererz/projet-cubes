let connexion = require('./db');


class Progression {
    
    static addLike(userId, ressourceId) {
        return new Promise((resolve, reject) => {
            let req = 'INSERT INTO browses (id_users, id_posts, likes) ';
                req+= 'VALUES (?, ?, 1) ';
                req+= 'ON DUPLICATE KEY UPDATE likes = 1';

            let params = [userId, ressourceId];
            
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('insert into table browses erreur', err);
                    reject(err);
                }
                else {
                    console.log('insert into table browses ok', result);
                    resolve(result);
                }
            });
        });
    } // addLike

    static removeLike(userId, ressourceId) {
        return new Promise((resolve, reject) => {
            let req = 'UPDATE browses SET likes = 0 ';
                req+= 'WHERE id_users = ? AND id_posts = ?';

            let params = [ressourceId, userId];
            
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('update table browses erreur', err);
                    reject(err);
                }
                else {
                    console.log('update table browses ok', result);
                    resolve(result);
                }
            });
        });
    } // removeLike




    static addBookmark(userId, ressourceId) {
        return new Promise((resolve, reject) => {
            let req = 'INSERT INTO browses (id_users, id_posts, bookmark) ';
                req+= 'VALUES (?, ?, 1) ';
                req+= 'ON DUPLICATE KEY UPDATE bookmark = 1';

            let params = [userId, ressourceId];
            
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('insert into table browses erreur', err);
                    reject(err);
                }
                else {
                    console.log('insert bookmark ok', result);
                    resolve(result);
                }
            });
        });
    } // addBookmark

    static removeBookmark(userId, ressourceId) {
        return new Promise((resolve, reject) => {
            let req = 'UPDATE browses SET bookmark = 0 ';
                req+= 'WHERE id_users = ? AND id_posts = ?';

            let params = [ressourceId, userId];
            
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('update table browses erreur', err);
                    reject(err);
                }
                else {
                    console.log('update table browses ok', result);
                    resolve(result);
                }
            });
        });
    } // removeBookmark

    static addRead(userId, ressourceId) {
        return new Promise((resolve, reject) => {
            let req = 'INSERT INTO browses (id_users, id_posts, read) ';
                req+= 'VALUES (?, ?, 1) ';
                req+= 'ON DUPLICATE KEY UPDATE read = 1';

            let params = [userId, ressourceId];
            
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('insert into table browses erreur', err);
                    reject(err);
                }
                else {
                    console.log('insert read ok', result);
                    resolve(result);
                }
            });
        });
    } // addRead

    static getAllBookmarksByUser(userId) {
        return new Promise((resolve, reject) => {

            if (!userId || Number(userId) < 1) reject("userId invalide");

            let req = 'SELECT * FROM browses ';
                req+= 'LEFT JOIN posts ON browses.id_posts = posts.id_posts ';
                req+= 'WHERE browses.id_users = ? AND bookmark = 1';

            let params = [userId];

            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('get all bookmarks erreur', err);
                    reject(err);
                }
                else {
                    console.log('get all bookmarks ok', result);
                    resolve(result);
                }
            })
        });
    }
}


module.exports = Progression;