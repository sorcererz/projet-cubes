const  mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'cube'
});
 

connection.connect();

module.exports = connection