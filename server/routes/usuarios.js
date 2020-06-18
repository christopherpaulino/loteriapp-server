const express = require('express')
const app = express()


app.post('/usuario',(req,res)=>{
    let body = req.body
    if(body.nombre===undefined){
        res.status(401).send({
            mensaje:"Error"
        })
    }else{
    res.status(200).send(body)}
})

module.exports(app)
