'use strict'

//Framework Java Script
var express = require ('express');
//Contructor archivos JSON
var bodyParser = require ('body-parser');

var app = express ();
// Carga Rutas
var user_routes = require ('./routes/user');

app.use (bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());
console.log(app.use);

//Configurar Cabeceras HTTP

//Rutas Base

app.use ('/api',user_routes);
//app.get ('/pruebas',function(req,res)
//{
//	res.status(200).send({message:'soy app.get'});
//})


console.log (user_routes)

module.exports = app;


