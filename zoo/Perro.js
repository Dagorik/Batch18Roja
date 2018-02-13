const animal = require('./Animal')

class Perro extends animal.Animal{
	constructor(raza,name,peso){
		super(name,peso)
		this.raza = raza
	}

	getRaza(){
		return this.raza
	}

	setRaza(newRaza){
		this.raza = newRaza
	}

	correr(){
		return `El perro de la raza ${this.raza} esta corriendo`
	}
}

module.exports.Perro = Perro