const express = require("express");
const mongoose = require("mongoose");
const router = require('./router');

const cors = require('cors');
const morgan = require('morgan');

//Connexion à la base de donnée
mongoose.connect('mongodb://localhost:27017/quiz', { useNewUrlParser: true }).then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});
const app = express();

const port = 8081;

app.use(morgan('combined'));
app.use(cors());
app.use(router)
    .listen(port, () => console.log('Example app listening on port ' + port));

module.exports = app;