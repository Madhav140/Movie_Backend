require('dotenv').config()

import express from 'express';
import cors from 'cors';

const router = require('./Routers/router')

import './DB/connection'

const MovieServer = express();

MovieServer.use(cors());
MovieServer.use(express.json());
MovieServer.use(router);
 

const PORT: number = 4000 || process.env

MovieServer.listen(PORT, () => {
    console.log(`Server Running Successfully at port number ${PORT}`);
});

MovieServer.get('/', (req:any, res:any) => {
    res.send(`<h1 style="color:red">Movie Database server running successfully</h1>`);
});