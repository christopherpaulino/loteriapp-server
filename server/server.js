const express = require('express') 
const http = require('http')
const bodyParser = require('body-parser')
const config = require('./config/config')
const app = express();

require('dotenv').config()

const {PORT,HOST} = config;

 //parse para x-www-form-urlencoded
 app.use(bodyParser.urlencoded({extended:false}))

// //parse para application/json
  app.use(bodyParser.json())
// //app.use(express.static(__dirname+'/public'))

app.use(require('./routes/index'))

app.listen(PORT,()=>{
  console.log(`Servidor corriendo en ${HOST}:${PORT}`);
  
})



// http.createServer((req,res)=>{

//     res.writeHead(200,{'Content-type':'application/json'})
//     let salida={
//         nombre:"Christopher Paulino",
//         edad:94,
//         url: req.url
//     }
//     res.write(JSON.stringify(salida))
//     res.end() 
// }).listen(port)



// console.log("Escuchando Puerto: "+port);

