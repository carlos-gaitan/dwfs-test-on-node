var request = require('supertest')
var expect = require('chai').expect
var server = require('../../index.js')
var Libro = require('../../models/libro')

describe('Libros', function() {
  before(function(done) {
    Libro.agregar({ titulo: 'Libro 1', isbn: '123' }, function() {
      Libro.agregar({ titulo: 'Libro 2', isbn: '321' }, function() {
        done()
      })
    })
  })

  describe('GET /libros', function () {
    it('devuelve un listado de libros', function(done) {
      request(server).get('/libros').end(function(err, res) {
        expect(res.status).to.eq(200)
        expect(res.body.length).to.eq(2)
        expect(res.body[0].titulo).to.eq('Libro 1')
        expect(res.body[0].isbn).to.eq('123')
        expect(res.body[1].titulo).to.eq('Libro 2')
        expect(res.body[1].isbn).to.eq('321')
        done()
      })
    })
  })
})
