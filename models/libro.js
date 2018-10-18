var connection = require('../database')
var libro = function(titulo, isbn) {
  this.titulo = titulo;
  this.isbn = isbn;
}

// libro.obtenerLista = function(cb) {
//   connection.query('SELECT titulo, isbn FROM libros', function(err, res) {
//     cb(err, res)
//   } )
// }

libro.obtenerLista = function(cb) {
  connection.query('SELECT titulo, isbn FROM libros', cb)
}
module.exports = libro;
