var request = require('request');

request.get('http://pokeapi.co/api/v2/pokemon/1/', 
	function(error,response,body){
	console.log('error ',error)		
	console.log('response',response.statusCode)
	var response = JSON.parse(body)
	//console.log('body',response.stats[0].stat.name)
	for (var i = 0; i<response.stats.length;i++){
		console.log(response.stats[i].stat.name)
	}
})