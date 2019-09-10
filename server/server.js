let exp = require('express'),
express = exp(),
bodyParser = require('body-parser'),
consign = require('consign'),
cors = require('cors');

//express.use(bodyParser.urlencoded({extended: true}));
express.use(bodyParser.json());
express.use(cors());
consign().include('server/routes')
.then('server/controllers')
.then('server/socketio.js')
.into(express);

express.listen(8080, function(service){
	console.log("Servidor online.");
});

module.exports = express;