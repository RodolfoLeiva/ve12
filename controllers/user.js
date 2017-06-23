'use strict' 
var bcrypt = require ('bcrypt');
var User = require ('../models/user');

function prueba (req,res){
	res.status(200).send({message:'soy el controlaor'});
}

function saveUser(req, res){

	res.status(200).send({message:'probando modelo user'});
	var User = new user();
	var params = req.body;

	user.usuario = params.usuario;
    user.nombre = params.nombre;
    user.password = params.password;
    user.empresa = params.empresa;
    user.Sexo = params.Sexo;
    user.fecha_last_conection = params.fecha_last_conection;
    user.hora_last_conection = params.hora_last_conection;
    user.estatus = params.estatus;
    user.fecha_cabio_pass = user.fecha_cabio_pass;
}

module.exports = {
prueba,
saveUser
}