function suma(x,y){
	var sumaTotal = x + y
	console.log(sumaTotal)
}

var suma2 = function(x,y){
	var sumaTotal = x + y
	console.log(sumaTotal)	
}

var suma3 = (x,y) => {
	var sumaTotal = x + y
	console.log(sumaTotal)		
}

suma(3,5)
suma2(3,5)
suma3(4,5)