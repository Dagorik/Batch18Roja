const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const facebook_service = require('./config')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req,res) =>{
	res.send('ChatbotJS cinta roja')
})


app.get('/webhook',(req,res) =>{
	console.log(req)
	if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === facebook_service.verifyToken) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  } 
})


app.post('/webhook',(req,res)=>{
	//Aqui va a llegar los JSONs de las conversaciones con mi fanpage
	//console.log(req.body)
	req.body.entry.forEach(function(messagingEvent){
		messagingEvent.messaging.forEach(function(message){
			console.log(message)
		})
	})
	res.sendStatus(200)
})

app.listen(3000, () => console.log(`Listening on port 3000`));