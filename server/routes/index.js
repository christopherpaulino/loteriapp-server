const express =  require('express')
const app = express()

const usuarioRoute = require('./usuario')
const loginRoute = require('./login')



app.use('/usuario',usuarioRoute)
app.use('/login',loginRoute)


module.exports = app;