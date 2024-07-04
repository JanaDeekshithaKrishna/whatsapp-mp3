const mysql = require('mysql2');
require('dotenv').config();

const pool=mysql.createPool({
    host:process.env.sql_host,
    user:process.env.sql_user,
    password:process.env.sql_password,
    database:process.env.sql_database
}).promise()

async function createNote(link,title,filesize,progress,duration,msg){
    const [result] =await pool.query(`
    insert into api_req (link,title,filesize,progress,msg)
    values(?,?,?,?,?)
    `,[link,title,filesize,progress,msg])
    
}

module.exports=createNote;