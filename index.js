// Setup express
const express = require('express')
const app = express()

// Setup database
const db = require('./database')

// Setup handlebars template engine
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Setup body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Setup Player
const Player = require('./model/player')

// Home
app.get('/', function(req,res) {
	Player.findAll({order: [['id', 'asc']]}).then(function(players) {
		res.render('home', {players: players})
	})
})

// Player api
app.get('/player', function(req,res) {
	res.render('player')
})

app.post('/player', function(req,res) {
	Player.create({
		name: req.body.name,
		email: req.body.email,
		battletag: req.body.battletag,
		facebook: req.body.facebook,
		whatsapp: req.body.whatsapp,
		minibio: req.body.minibio,
		race: req.body.race
	}).then(function() {
		res.redirect('/')
	}).catch(function(error) {
		console.log('Error saving player: ' + error)
	})
})

app.get('/sobre', function(req,res) {
	res.send('Sobre meu servidor node');
});

app.get('/ola', function(req,res) {
	res.send('Ola daemon');
})

// Starts server
app.listen(8080, function() {
	console.log('Servidor rodando em 8080!');
});

