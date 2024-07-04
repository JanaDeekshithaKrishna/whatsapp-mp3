import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool=mysql.createPool({
    host:process.env.sql_host,
    user:process.env.sql_user,
    password:process.env.sql_password,
    database:process.env.sql_database
}).promise()

export async function getNotes(){
    const [rows] = await pool.query("select * from notes")
    return rows
}

export async function getNote(ids){
    const [rows] = await pool.query(`
    select * 
    from notes
    where id= ?
    `,[ids])
    return rows[0]
}

export async function createNote(title,contents){
    const [result] =await pool.query(`
    insert into notes (title,contents)
    values(?,?)
    `,[title,contents])
    const id=result.insertId
    return getNote(id)
}
