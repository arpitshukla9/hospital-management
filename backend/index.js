import express from 'express';
import Route from './Routes/routes.js';
import connection from './Database/db.js';
import cors from 'cors';
import bodyparser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use('/',Route);
connection();
app.listen(PORT,()=>{console.log("running on port 8000")});
