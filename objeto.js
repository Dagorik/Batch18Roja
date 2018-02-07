
var factura = {};

console.log(typeof(factura));

var factura = {
		    numero: 201,
		    cliente: 'Transportes Chemita',
		    divisa: 'eur',
		    subtotal: 350.25,
		    IVA: 75.55,
		    total: function(){
			  return this.subtotal + this.IVA;
		    }
		}

		var numeroFactura = factura.numero;
		var totalFactura = factura.total(); 
		// los métodos, por su capacidad de recibir parámetros, requieren paréntensis en su ejecución

		//console.log('La factura ' + numeroFactura + ' tiene un importe de ' + totalFactura);



function Auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
  
  var arranca = function(){
  	console.log("Arranco el " + marca )
  }

  this.arranca = arranca

}

var miAuto = new Auto("Eagle", "Talon TSi", 1993);
var kenscar = new Auto("Nissan", "300ZX", 1992);

console.log(miAuto.arranca())
