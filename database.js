var mysql = require('mysql')

var db = process.env.NODE_ENV === 'test' ? 'biblioteca_test' : 'biblioteca'

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: db
})

module.exports = connection
