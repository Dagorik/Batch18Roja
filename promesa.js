var request = require('request');

var url = 'https://swapi.co/api/people/1'
/*
console.log("1")
var name
request.get(url,function(error,status,response){
	response = JSON.parse(response);
	name = response.name
	console.log("dentro " + name)
})

console.log(name)
console.log("2")


const promise = new Promise(function(resolve,reject){
		request.get(url,function(error,status,response){
			if(status.statusCode == 200){
				resolve(JSON.parse(response))
			}else{
				reject("Errorsin")
			}		
		});
	});

*/
function promesa(){
	return new Promise(function(resolve,reject){
		request.get(url,function(error,status,response){
			if(status.statusCode == 200){
				resolve(JSON.parse(response))
			}else{
				reject("Errorsin")
			}		
		});
	});
}


console.log(1)
promesa()
	.then(function(body){
		console.log("Se resolvio la promesa")
		console.log(body.name)
	}).catch(function(error){
		console.log(error)
	})
console.log(2)















