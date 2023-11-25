import "dotenv/config";
import express from 'express';
import routes from './routes';
import dbConnection from './models/connection';

const PORT = process.env.PORT ?? 3001

const app = express();
app.use(express.json());

app.use('/v1', routes)

app.listen(PORT, async () => {
    await dbConnection.connect()
    console.log(`Servidor aberto na porta ${process.env.PORT ?? 3001}`)
})