var expect = require('chai').expect;
var Invitados = require('../invitados')

describe('Inicialización de la lista de invitados', function(){
	it('debe tener cantidad 0',function(done){
    expect(Invitados.obtenerCantidad()).to.equal(0);
    done();
  })

	it('debe comenzar vacía',function(done){
    expect(Invitados.obtenerLista()).eql([]);
    done();
	})
})

describe('Agregar un invitado', function(){
  it('debe agregar un elemento a la lista de invitados',function(done){
    var cantidadAnterior = Invitados.obtenerCantidad();
    Invitados.agregarInvitado('Juan');
    expect(Invitados.obtenerCantidad()).to.equal(cantidadAnterior + 1);
    expect(Invitados.obtenerLista()).eql(['Juan']);
    done();
  })

  it('no debe agregar el elemento si el nombre es una cadena vacía',function(done){
    var cantidadAnterior = Invitados.obtenerCantidad();
    Invitados.agregarInvitado('');
    expect(Invitados.obtenerCantidad()).to.equal(cantidadAnterior);
    done();
  })

  it('no debe agregar el elemento si el nombre son solo espacios',function(done){
    var cantidadAnterior = Invitados.obtenerCantidad();
    Invitados.agregarInvitado('    ');
    expect(Invitados.obtenerCantidad()).to.equal(cantidadAnterior);
    done();
  })

  it('no debe agregar el elemento si el nombre es nulo',function(done){
    var cantidadAnterior = Invitados.obtenerCantidad();
    Invitados.agregarInvitado();
    expect(Invitados.obtenerCantidad()).to.equal(cantidadAnterior);
    done();
  })
})

describe('Eliminar un invitado', function(){
  it('debe eliminar un elemento al arreglo', function(done){
    var cantidadAnterior = Invitados.obtenerCantidad();
    Invitados.eliminarUltimoInvitado(function(){
      expect(Invitados.obtenerCantidad()).to.equal(cantidadAnterior - 1);
      expect(Invitados.obtenerLista()).eql([]);
      done();
    });    
  })
})
