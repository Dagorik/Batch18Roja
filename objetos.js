var objeto = {}
//console.log(typeof(objeto))

var jetta = {
	motor:"V4",
	ruedas:4,
	marca: "Nissan",
	acelerar: function(){
		console.log(this.motor)
		return "ARRANCANDO"
	}
}

function Auto(marca,modelo,annio){
	this.marca = marca
	this.modelo = modelo
	this.annio = annio

	var arrancar = function(){
		return "Arranco el " + modelo
	}

	this.arrancar = arrancar
}


var jetta = new Auto("Nissan","Jetta",2010)
console.log(jetta.arrancar())
var tsuru = new Auto("Nissan","Tsuru",2000)
console.log(tsuru.arrancar())





