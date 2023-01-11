const express = require('express');
const app = express();
require('dotenv').config({path: "backend/config/config.env"});
const connectDatabase = require('./config/database');

// config
app.get('/', (req, res) => {
    res.send("hello selamat soree")
})

// config database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server successfully http://localhost:${process.env.PORT}...`)
})