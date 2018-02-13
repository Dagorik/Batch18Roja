var request = require('request');

request('https://www.google.com.mx/', 
	function(error,resopnse,body){
	console.log('error ',error)		
	console.log('response',response)
	console.log('body',body)
})