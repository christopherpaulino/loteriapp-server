'use-strict'
const mssql = require('../mssql/mssql')
const Usuario = require('../models/usuario')

exports.getNombre = async(req,res)=>{
    let con = new mssql;
    try{
        con.connectToDB()
        res.send("Conectado Correctamente");
        
    }catch(err){
        throw(err)
    }
    finally{
        con.close()
    }
}