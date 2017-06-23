'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema ;
//var app = require('http');

var userSchema = Schema ({

	usuario : String,
    nombre : String,
    password : String,
    empresa : String,
    Sexo : String,
    fecha_last_conection : String,
    hora_last_conection : String,
    estatus : String,
    fecha_cabio_pass : String
});
module.exports = mongoose.model ('user', userSchema)