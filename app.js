'use strict'

//Framework Java Script
var express = require ('express');
//Contructor archivos JSON
var bodyParser = require ('body-parser');

var app = express ();

// Carca Rutas
app.use (bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());


//Configurar Cabeceras HTTP

//Rutas Base

app.get('/prueba', function (req,res) {
	res.status(200).send({message:'Funciono mierda'})
});

module.exports = app;


