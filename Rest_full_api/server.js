const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('./mongoClient')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('',(req,res) =>{
	res.send('Hola mundo')
})

app.get('/api/:uuid',(req,res) =>{
	const {uuid} = req.params
	res.send({uuid})
})

app.post('/v1/api/post',(req,res) => {
	const data = typeof req.body == 'string' ?
	 JSON.parse(req.body) : req.body;
	 
	res.status(201).json({La_suma_total_es:'suma'})
})

app.post('/create/student/',(req,res) => {
	const {name,age,program} = req.body
	MongoClient.saveStudent(name,age,program).then(function(student){
			res.send({student})
	})

})




app.listen(3000, () => console.log(`Listening on port 3000`));