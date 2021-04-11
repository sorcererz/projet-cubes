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

    static askFriend(userId, friendId) {
        
    } // askFriend

    static blockById(userId, blockId) {

    }

    static getCommentsByIdRessource(id) {
        return new Promise((resolve, reject) => {
            let req = 'SELECT * FROM comments LEFT JOIN users ON users.id_users = comments.id_users ';
                req+= 'WHERE comments.id_posts = ? AND comments.status = 1 ORDER BY comments.date_comment ASC';

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

    static sendPrivateMessage(userId, targetId, content) {
        return new Promise((resolve, reject) => {
            let req = 'INSERT INTO messages SET id_users = ?, id_target = ?, content = ?';

            let params = [userId, targetId, content];
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('insert message erreur', err);
                    reject(err);
                }
                else {
                    console.log('insert message ok', result);
                    resolve(result);
                }
            });
        });
    } // sendPrivateMessage

    static getPrivateMessages(userId, targetId) {
        return new Promise((resolve, reject) => {
            let req = 'SELECT m.id_messages, m.content, authors.name as author_name, authors.firstname as author_firstname, ';
                req+= 'targets.name as target_name, targets.firstname as target_firstname, authors.id_users as author_id ';
                req+= 'FROM messages m ';
                req+= 'LEFT JOIN users as authors ON authors.id_users = m.id_users ';
                req+= 'LEFT JOIN users as targets ON targets.id_users = m.id_target ';
                req+= 'WHERE (m.id_users = ? AND m.id_target = ?) OR (m.id_target = ? AND m.id_users = ?) ';
                req+= 'ORDER BY m.id_messages'

            let params = [userId, targetId, userId, targetId];
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('get messages erreur', err);
                    reject(err);
                }
                else {
                    console.log('get messages ok', result);
                    resolve(result);
                }
            });
        });
    } // getPrivateMessages

    static getConversations(userId) {
        return new Promise((resolve, reject) => {
            let req = `SELECT id, content, u.name, u.firstname 
                       FROM (
                            SELECT id_users as id, content, id_messages
                            FROM messages 
                            WHERE messages.id_target = 6
                            UNION ALL 
                            SELECT id_target as id, content, id_messages
                            FROM messages 
                            WHERE messages.id_users = 6 
                            ORDER BY id_messages DESC
                       ) m
                       INNER JOIN users u ON u.id_users = m.id
                       GROUP BY id`;

            let params = [userId, userId];
            connexion.query(req, params, (err, result) => {
                if (err) {
                    console.log('get contacts : erreur -> ', err);
                    reject(err);
                }
                else {
                    console.log('get contacts : ok ->', result);
                    resolve(result);
                }
            });
        }); // new Promise
    } // getConversations
}


module.exports = Echange;