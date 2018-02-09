class Animal{
	constructor(name,peso){
		this.name = name
		this.peso = peso
	}

	getName(){
		return this.name
	}

	setName(newName){
		this.name = newName
		return this.name
	}

	comer(comida){
		return `${this.name} esta comiendo ${comida}`
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
		return this.raza
	}

	ladrar(){
		return "Waaau"
	}
}


class Gato extends Animal{
	constructor(raza,name,peso){
		super(name,peso)
		this.raza = raza
	}

	getRaza(){
		return this.raza
	}

	setRaza(newRaza){
		this.raza = newRaza
		return this.raza
	}

	maullar(){
		return "Miiiiau"
	}
}


function comerComida(animal){
	console.log(animal.comer("Comida"))
}

let gato = new Gato("Gato","Minino",30)
let perro = new Perro("Perro","Fido",30)
//console.log(gato.comer("Pescado"))

comerComida(gato)
