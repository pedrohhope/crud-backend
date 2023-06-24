import * as dotenv from "dotenv";
dotenv.config();

import express from 'express';

import routes from './routes';
import dbConnection from './models/connection';


const app = express();
app.use(express.json());

app.use('/v1', routes)

app.listen(3001, async () => {
    await dbConnection.connect()
    console.log('Servidor aberto na porta 3001')
})