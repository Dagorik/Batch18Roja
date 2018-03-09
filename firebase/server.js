const admin = require("firebase-admin");
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var serviceAccount = require("./batch15android-firebase-adminsdk-0wdfj-4af75acc3a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://batch15android.firebaseio.com"
});

var db = admin.database()
var ref = db.ref('cintaroja');

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


// Trae a los usuarios desde firebase
app.get('/users',(req,res)=>{

	ref.child('users').on("value", (snapshot) => {
		res.send(snapshot.val());
	},(errorObject) => {
		res.send("Error al traer users");
	});


});

//Busca un usuario en especifico
app.get('/users/:search',(req,res)=>{

	ref.child('users').child(req.params.search).on("value", (snapshot) => {
		let obj = snapshot.val()
		if(obj === null){
			res.status(404).send("No hay usuario con ese nombre")
		}else{
			res.send(obj);
		}
		
	});


});

//Modifica un usuario en especifico
app.put('/users/update/:search',(req,res)=>{
	let userRef = ref.child('users').child(req.params.search);
	userRef.on("value", (snapshot) => {
		let obj = snapshot.val()
		if(obj === null){
			res.status(404).send("No hay usuario con ese nombre")
		}else{
			userRef.set(req.body)
			res.send(snapshot.val());

		}
		
	});


});




//Agrega un nuevo usuario

app.post('/users/new/', (req, res) => {
	var usersRef = ref.child('users')
	
	usersRef.update(req.body);

	usersRef.on("value", (snapshot) => {
		res.send(snapshot.val());
	},(errorObject) => {
		res.send("Error al traer users");
	});


});


app.get('/save',(req,res)=>{
		
	var usersRef = ref.child('users')
	
	usersRef.set({
		  alanisawesome: {
		    date_of_birth: "June 23, 1912",
		    full_name: "Alan Turing"
		  },
		  gracehop: {
		    date_of_birth: "December 9, 1906",
		    full_name: "Grace Hopper"
		  }
		});

	res.send('todo chido')
})

app.listen(3000,() => console.log("Server!"));
