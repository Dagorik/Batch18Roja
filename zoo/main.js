var perro = require('./Perro')

var pug = new perro.Perro("Pug","Fido",'Terrestre')
console.log(pug)


var list = [pug...]

function devulveTerrestres(liistAnimlaes){
	var listTerrestres = []
	for (var i= 0; i < liistAnimlaes.l;i++){
		var animal = liistAnimlaes[i]
		if (animal.raza == 'Terrestre'){
			listTerrestres.push(animal)
		}
	}

	return listTerrestres
}