v
/*
request.get(url,function(error,status,response){
	response = JSON.parse(response);
	name = response.name
	console.log(status.statusCode)
	console.log("dentro " + name)
})

console.log("fuera " + name)
console.log("2")


const promise = new Promise(function(resolve,reject){
	request.get(url,function(error,status,response){
		if (status.statusCode==200){
			resolve(JSON.parse(response))	
		}else{
			reject('Errorsin bbebe')
		}
		console.log("dentro " + name)
	})
})
*/

function peticion(){
	return new Promise(function(resolve,reject){
	request.get(url,function(error,status,response){
		if (status.statusCode==200){
			resolve(JSON.parse(response));
		}else{
			reject('Errorsin bbebe');
		}
		console.log("dentro " + name);
		});
			});

	};

peticion()
	.then(function(chido){
		console.log(chido)
	}).catch(function(error){
		console.log(error)
	})

