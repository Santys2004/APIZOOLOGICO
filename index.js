/* "use strict"
const http = require("http");
const port = process.env.port || 5000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {"content-type": "text/plain"})
    res.end("hola mundo");
})

server.listen(port);*/
const express = require('express');
const morgan = require('morgan')

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("El payaso plin plin se quedo llorando??, no wey se la vo la carita y siguio.  animo mano, Pone verga")
})

app.listen(port, () => {
    'console.log(La aplicacion esta ejecutando en el puesto: ${ port })'
})