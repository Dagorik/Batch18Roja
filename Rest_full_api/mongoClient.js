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

function findStudent(name){
	return MongoClient.connect(db.url).then(function(client){
		let db = client.db('roja')
		let collections = db.collection('students')
		return collections.find({"name":name}).toArray()
	}).then(function(docs){
		return docs
	}).catch(function(err){
		return err
	})
}

module.exports.saveStudent = saveStudent
module.exports.findStudent = findStudent

