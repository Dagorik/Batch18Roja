'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAHFydyeCCIBAGBz7EHgoYimzy7v7tasnIV1gELh5vQUgwZCA4WxfFPKAQFsOtqT7L3bzdov667E0Aq2KzADjcZCdOu8pL18jHnRQqZBptmHaZA1PTPK0rztZAETW7wBkinkeLNfphfrdyZCT5SBjbsqTkP8ajxnRXfAWMTdN1q0AFzjQZAH14U',
  verifyToken: 'botprueba',
  appSecret: 'f2411b520112b66a4e1ccb9788998076'
});
/*Te responde lo mismo que le dices.
bot.on('message', (payload, chat) => {
    console.log("entre!!")
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});
*/

/*Envia mensaje si encuentra alguna elemento en la lista
bot.hear(['hello', 'hi', 'hola','que onda','holi','que tranza'], (payload, chat) => {
	chat.say('Hola humano!').then(() => {
		chat.say('Como estas el dia de hoy?', { typing: true });
	});
});
*/

/*Mensaje con quick replice
bot.hear(['comida', 'hambre'], (payload, chat) => {
	chat.say({
		text: 'What do you want to eat today?',
		quickReplies: ['Mexican', 'Italian', 'American', 'Argentine']
	});
});
*/

/*Enviar mensaje con botones
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


bot.on('postback:HELP_HUMAN', (payload, chat) => {
    console.log('The Help Me button was clicked!');
    chat.say(`Una persona esta contigo en unos momentos.`);
});
*/
/*Convo de una platica
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
*/
/* Enviar lista
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

*/

bot.start();
