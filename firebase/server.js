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