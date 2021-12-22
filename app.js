
let ejs = require('ejs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let path = require('path');

const express = require('express');
const app = express();

const morgan = require('morgan');
const logger = morgan(':url :status :res[content-length] - :response-time ms')

app.use(logger);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    //res.send("hi");
    console.log("home page");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});