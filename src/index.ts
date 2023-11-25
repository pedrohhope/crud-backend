import "dotenv/config";
import express from 'express';

const PORT = process.env.PORT ?? 3001;

import routes from './routes';
import dbConnection from './models/connection';


const app = express();
app.use(express.json());

app.use('/v1', routes)

app.listen(PORT, async () => {
    await dbConnection.connect()
    console.log('Servidor aberto na porta 3001')
})