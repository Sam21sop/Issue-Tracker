import dotenv from 'dotenv';
dotenv.config();
import server from './index.js';
import { connectToDB } from './config/db.js';

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
// console.log(BASE_URL);



server.listen(PORT, ()=>{
    connectToDB(BASE_URL)
    console.log(`server listening on http://localhost:${PORT}`);    
});