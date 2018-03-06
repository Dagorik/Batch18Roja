const Bootbot = require('bootbot')

const bot = new Bootbot({
	accessToken: 'EAAHFydyeCCIBAATfqdkaWV8wr9Sy16SZC0DbsmGSEszZCHbHYZBL0aZBejkhFwbnQc8FLYRwGatIMqNWXXTEs4kqQbOTypDNDr8WYAVWfeCgGZA7wpi9FuWSc577uc5VcYwrZCWZAOBVepJFXWZA69Bi2Xar8u2t44OpMkn0T6HH9GT99wXOmZAHz',
	verifyToken: 'botcintaroja',
	appSecret: 'f2411b520112b66a4e1ccb9788998076'
});
/*
bot.on('message',(payload,chat) => {
	console.log(payload)
	chat.say('Hola humano, soy tu primer bot.')
});
*/

bot.hear(['hola','que onda','holi'],(payload,chat)=>{
	chat.say('Hola soy el bot de Ciinta Roja :D ')
});

bot.hear(['bye','adios'],(payload,chat)=>{
	//hacer la consulta a google calendar y traer las horas libreshear(['bye','adios'],(	payload,chat)=>{
	
	chat.say('Adios humano')

});

bot.hear(['comida', 'hambre'], (payload, chat) => {
	chat.say({
		text: 'Que quieres comer el dia de hoy',
		quickReplies: ['Mexican', 'Italian', 'American', 'Argentine']
	});
});


bot.hear(['ayuda'], (payload, chat) => {
	chat.say({
		text: 'En que te puedo ayudar?',
		buttons: [
			{ type: 'postback', title: 'Settings', payload: 'HELP_SETTINGS' },
			{ type: 'postback', title: 'FAQ', payload: 'HELP_FAQ' },
			{ type: 'postback', title: 'Talk to a human', payload: 'HELP_HUMAN' }
		]
	});
});

bot.on('postback:HELP_HUMAN',(payload,chat) =>{
	chat.say('Una persona estará contigo en unos segundos...')
})

bot.hear(['lista'], (payload, chat) => { 
  chat.say({
	elements: [
        { title: 'Artile 1', image_url: 'https://www.iheartnaptime.net/wp-content/uploads/2014/08/Shredded-beef-tacos-200x200.jpg', default_action: {"type": "web_url","url": "https://www.google.com.mx/"}},
		{ title: 'Artile 2', image_url: 'https://www.iheartnaptime.net/wp-content/uploads/2014/08/Shredded-beef-tacos-200x200.jpg', default_action: {"type": "web_url","url": "https://www.google.com.mx/",}}
	],
	buttons: [
		{ type: 'postback', title: 'View More', payload: 'VIEW_MORE' }
	]
});
});





bot.hear('Hola chatbot', (payload, chat) => {	

	const askName = (convo) => {
		convo.ask(`Como te llamas?`, (payload, convo) => {
			const text = payload.message.text;
			convo.set('name', text);
			convo.say(`Hola  ${text} mucho gusto en conocerte`).then(() => askFavoriteFood(convo));
		});
	};

	const askFavoriteFood = (convo) => {
		convo.ask(`Cual es tu comida favorita?`, (payload, convo) => {
			const text = payload.message.text;
			convo.set('food', text);
			convo.say(`Bien tu comida favorita son ${text}`).then(() => sendSummary(convo));
		});
	};

	const sendSummary = (convo) => {
		convo.say(`Ok, esto es lo que se de ti por ahora:
- Nombre: ${convo.get('name')}
- Comida favo: ${convo.get('food')}`);
      convo.end();
	};
	
	chat.conversation((convo) => {
		askName(convo);
	});
});








bot.start();

















