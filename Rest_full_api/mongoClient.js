const MongoClient = require('mongodb').MongoClient;
const db = require('./configDb')

function saveStudent(name,age,program){
	return MongoClient.connect(db.url).then(function(client){
		let db = client.db('roja')
		let collections = db.collection('students')
		let data = {
			'name':name,
			'age':age,
			'program':program
		}
		return collections.insert(data)
	}).then(function(docs){
		return docs
	})

}

module.exports.saveStudent = saveStudent

