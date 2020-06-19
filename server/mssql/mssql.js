'use-strict'

const mssql = require('mssql')
require('dotenv').config()
const config = require('../config/config')
const { sql } = require('../config/config')

let conn = new mssql.ConnectionPool(sql)

class Mssql{

   
    
    
    connectToDB=()=>{
        console.log(sql);
        conn.connect(err=>{
            if(err){
                console.log(err);
                throw(err)
                
            }
             console.log('Connecto Correctamente');
             
            return
        })
    }

    close=()=>{
        conn.close()
    }
    

}

module.exports=Mssql;



