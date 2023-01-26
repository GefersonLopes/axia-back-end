"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_routes_1 = require("./routes/data.routes");
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const socketIO = require('socket.io');
const getData_service_1 = require("./services/getData.service");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(data_routes_1.scraping);
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
io.on('connection', (socket) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`User connected ${socket.id}`);
    socket.on('getNews', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const url = 'https://www.reuters.com';
        data = yield (0, getData_service_1.getDataService)(url);
        socket.emit('getNews', data);
    }));
    socket.on('disconnect', () => console.log('User Disconnected'));
}));
mongoose_1.default.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xynd7vm.mongodb.net/?retryWrites=true&w=majority`);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Server running on port 3002'));
