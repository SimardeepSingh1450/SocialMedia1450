const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Hack12345@',
  database :'socialmedia'
});

module.exports=db;