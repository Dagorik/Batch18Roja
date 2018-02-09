class Animal{
	constructor(name,peso=0){
		this.name = name
		this.peso = peso
	}

	getName(){
		return this.name
	}

	setName(newName){
		this.name = newName
	}

	comer(comida){
		return 'El ' + this.name + ' esta comiendo ' + comida 
	}
}

class Perro extends Animal{
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

class Pajaro extends Animal{
	constructor(color,name,peso){
		super(name,peso)
		this.color = color
	}

	volar(){
		return `El pajarito de color ${this.color} esta volando`
	}
}
var pug = new Perro("Pug","Fido",40)
console.log(pug)
var perico = new Pajaro("Azul","Periquito",5)
console.log(perico)

function comerComida(Animal){
	console.log(Animal.comer("Comida"))
}

comerComida(perico)


