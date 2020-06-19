const express = require('express')
const app = express()

const UsuarioController = require('../controllers/usuario_controller')



app.post('/',UsuarioController.getNombre)

module.exports = app
