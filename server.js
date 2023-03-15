const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./Routes/routes');

const app = express();
const PORT = 8000;
const URL = "mongodb://localhost:27017/mydatabase";

// MiddleWre
app.use(bodyParser.json()) // parsing json format
app.use(bodyParser.urlencoded({ extended: true })) // decoded data to encoded using bodyParser

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then((response) => {
    console.log(`Database Connected Successfully on ${PORT}`)
    app.use('/', routes);
})


app.listen(PORT, function() {
    console.log("Welcome VIJAY");
})