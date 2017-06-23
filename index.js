'use strict'

var mongoose = require ('mongoose');
var app = require ('./app');
//var app = require('http');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect ('mongodb://localhost:27017/veapp',(err,res) => {
if (err) {
	throw err;
}else {
	console.log ("Conexion a base de datos realizada con exito...");
	app.listen (port, function(){
		console.log ("Servidor del api rest ecuchando en http://localhost:" + port + "...")
	});
	
	
}

})