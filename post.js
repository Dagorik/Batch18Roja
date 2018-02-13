URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1"
var request = require('request');
URI = "/authors/"
URL = URL_BASE + URI
	json_send = {
		"name": "nombre",
		"last_name": "apellidos",
		"nacionalidad": "MX",
		"biography": "bio",
		"gender": "F",
		"age": 12
	}

request.post({url:URL, form: json_send}, function(err,httpResponse,body){ 
    console.log('error ',err)
    console.log("httpResponse",httpResponse)
    console.log("body",body)
})

    