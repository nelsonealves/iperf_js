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
.into(express);


express.listen(8080, function(){
	console.log("Servidor online.");
});

module.exports = express;