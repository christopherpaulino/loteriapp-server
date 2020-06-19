require('dotenv').config()
const assert =require('assert')

const{
    PORT,
    HOST,
    SQL_USER,
    SQL_PASSWORD,
    SQL_HOST,
    SQL_PORT,
    SQL_DATABASE
} = process.env

assert(PORT,'PORT Configuration is required');
assert(HOST,'HOST Configuration is required');
assert(SQL_USER,'SQL_USER Configuration is required');
assert(SQL_PASSWORD,'SQL_PASSWORD Configuration is required');
assert(SQL_HOST,'SQL_HOST Configuration is required');
assert(SQL_PORT,'SQL_PORT Configuration is required');
assert(SQL_DATABASE,'SQL_DATABASE Configuration is required');

module.exports={
    PORT,
    HOST,
    sql:{
        user:SQL_USER,
        password:SQL_PASSWORD,
        server:SQL_HOST,
        database:SQL_DATABASE,
        port:parseInt(SQL_PORT),
        options:{
            encrypt:true
        }
    }

}
