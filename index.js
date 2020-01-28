const express = require ('express');
const path = require("path");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'error: '));
db.once('open', () => {
    console.log('MongoDB database connection established!');
});

app.listen(process.env.PORT || 4000, ()=> console.log('APP listening on port 4000'));
