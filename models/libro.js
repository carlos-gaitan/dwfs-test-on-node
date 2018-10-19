var connection = require('../database')

var Libro = function(titulo, isbn) {
  this.titulo = titulo;
  this.isbn = isbn;
}

Libro.obtenerLista = function (cb) {
  connection.query('SELECT titulo, isbn FROM libros', cb)
}

Libro.agregar = function (data, cb) {
  var sqlQuery = `INSERT INTO libros (titulo, isbn)
    VALUES ('${data.titulo}', '${data.isbn}')`
  connection.query(sqlQuery, cb)
}

module.exports = Libro
