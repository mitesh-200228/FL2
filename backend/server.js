require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const CORS = require('cors');
const router = require('./router');

const config = {
    credentials: true,
    origin:['http://localhost:3000']
}

app.use(express.json());
app.use(CORS(config));
app.use(router);
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on PORT ${PORT}`);
});