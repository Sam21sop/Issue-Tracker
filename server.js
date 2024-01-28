import dotenv from 'dotenv';
dotenv.config();
import server from './index.js';
import { connectToDB } from './src/config/db.js';

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME


server.listen(PORT, ()=>{
    console.log(`server listening on http://localhost:${PORT}`);
    connectToDB(BASE_URL, DATABASE_NAME)
});