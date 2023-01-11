const app = require('./app');
const dotenv = require('dotenv');
const connectedDatabase = require('./config/database');

// configuration dotenv
dotenv.config({path:`backend/config/.env`});

// connected rahasia
connectedDatabase();


app.listen(process.env.PORT, () => {
    console.log(`port successfully...${process.env.PORT}`)
})