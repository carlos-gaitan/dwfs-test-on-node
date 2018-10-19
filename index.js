var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Libro = require('./models/libro')

app.use(bodyParser.json());

app.get('/', function(req, res){ 
  console.log(req.query);
  var param1 = req.query.param1;
  var otroparam = req.query.otroparam;
  res.json({
    otroparam: otroparam,
    param1: param1
  });
})

app.get('/libros', function(req, res){  
  Libro.obtenerLista(function(err, resultado) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: err
      })
    }
    res.status(200).json(resultado)
  })
})

var puerto = 8085;
var server = app.listen(puerto, function(){
  console.log("Server corriendo en el puerto", puerto);
})

module.exports = server
