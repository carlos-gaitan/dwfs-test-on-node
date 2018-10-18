var express = require('express');
var app = express();
var bodyParser = require('body-parser')

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

app.get('/product/:id', function(req, res){  
  res.send('El ID del producto es ' + req.params.id);
})

app.post('/product/:id', function(req, res){  
  console.log(req.body);
  res.send("ok!");
})

var puerto = 8085;
app.listen(puerto, function(){
  console.log("Server corriendo en el puerto", puerto);
})