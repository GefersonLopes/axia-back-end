import express from 'express';
import cors from 'cors';
import { scraping } from './routes/data.routes';
import mongoose from 'mongoose';
import 'dotenv/config';
const socketIO = require('socket.io');
import { Data } from './interfaces/@types';
import { getDataService } from './services/getData.service';

const app = express();
app.use(express.json());
app.use(cors());

app.use(scraping);

const server = app.listen(3002);
const io = socketIO(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: [
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Headers',
            'Origin,Accept',
            'X-Requested-With',
            'Content-Type',
            'Access-Control-Request-Method',
            'Access-Control-Request-Headers',
            'Authorization',
        ],
        credentials: true,
    },
});

io.on('connection', async (socket: any) => {
    console.log(`User connected ${socket.id}`);

    socket.on('getNews', async (data: Data[]) => {
        const url = 'https://www.reuters.com';
        data = await getDataService(url);
        socket.emit('getNews', data);
    });

    socket.on('disconnect', () => console.log('User Disconnected'));
});

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xynd7vm.mongodb.net/?retryWrites=true&w=majority`,
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Server running on port 3002'));
