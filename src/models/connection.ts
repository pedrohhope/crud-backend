import { Client } from 'pg'

const dbConnection = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    port: parseInt(process.env.PORT || '5432')
})


export default dbConnection