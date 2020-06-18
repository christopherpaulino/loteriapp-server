const express = require('express') 
const http = require('http')
const bodyParser = require('body-parser')

const app = express();

require('dotenv').config()

const port = process.env.PORT;

 //parse para x-www-form-urlencoded
 app.use(bodyParser.urlencoded({extended:false}))

// //parse para application/json
  app.use(bodyParser.json())
// //app.use(express.static(__dirname+'/public'))


app.get('/',(req, res)=>{

    let salida= {
        nombre:"Jose",
        apellido: "Ventura"
    }
    res.status(200).send(salida)
})

app.listen(port)



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

