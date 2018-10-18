var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  puerto: '3306',
  user: 'root',
  password:'qwerasdf',
  database: 'biblioteca'
})

module.exports = connection
