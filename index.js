const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
	res.send('Hello');
});

app.listen(port, () => {
	console.log('Listening on port...', port);
});

app.post('/hello', (req, res, next) => {
	const userName = req.body.user_name;
	const botPayload = {
		text: 'Hello' + userName + ', you\'re looking good!'
	}

	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload)
	} else {
		return res.status(200).end()
	}
});