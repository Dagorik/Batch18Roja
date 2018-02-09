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
		return this.name + ' esta comiendo ' + comida
	}
}

let animal = new Animal("Fido",30)
console.log(animal.comer("Croquetas"))
