function suma(x,y){
	var sumaTotal = x + y
	return sumaTotal
}

var suma2 = function(x,y){
	var sumaTotal = x + y
	console.log(sumaTotal)	
}

var suma3 = (x,y) => {
	var sumaTotal = x + y
	console.log(sumaTotal)		
}

var x = suma(3,5)
console.log(x)
//suma2(3,5)
//suma3(4,5)