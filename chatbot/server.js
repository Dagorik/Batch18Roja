const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const facebook_service = require('./config')
const Bot = require('./Bot')
const generic =  [
            {'title': 'La construcción',
            'image_url':'https://urbania.pe/blog/wp-content/uploads/2015/02/edificio-lum1.jpg',
            'subtitle':'Este es el subtitulo :D',
            'buttons':[
             {'type':'postback',
               'title':'Cotizar',
               'payload':'COTIZAR_CONSTRUCCION_POSTBACK'}
           ]},
           {'title': 'Los contenidos',
           'image_url':'http://s3.amazonaws.com/digitaltrends-uploads-prod/2013/08/home-theater-under-3000-k.jpg',
           'subtitle':' ',
           'buttons':[
            {'type':'postback',
              'title':'Cotizar',
              'payload':'COTIZAR_CONTENIDOS_POSTBACK'}
          ]},
          {'title': 'Construcción y contenidos',
          'image_url':'https://www.deinmuebles.com.mx/wp-content/uploads/2016/11/Diseno-de-sala-y-cocina-de-mini-departamento.jpg',
          'subtitle':' ',
          'buttons':[
           {"type":"web_url",
              "title":"Latest News",
              "url":"https://www.messenger.com/",
              "webview_height_ratio":"full"}
         ]}
        ]
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
			const repliceBot = new Bot(facebook_service.accessToken)
			repliceBot.sendTextMessage(message.sender.id,"Holaaaaa!!!! :D")
			repliceBot.sendGenericTemplate(message.sender.id,generic)

		})
	})
	res.sendStatus(200)
})

app.listen(3000, () => console.log(`Listening on port 3000`));