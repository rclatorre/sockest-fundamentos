const express = require('express');
const socketIO = require('socket.io'); //  <-------Importando el paquete
const http = require('http'); // <------- para que trabje express con un servidor web

const path = require('path');

const app = express();
let server = http.createServer(app); //  <----servidor con toda la configuracion para express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// let io = socketIO(server); //  <-------    comunicaccon del backend
module.exports.io = socketIO(server); //  <-------    comunicaccon del backend
require('./sockets/socket'); //  <------- usamos el codigo que separamos


server.listen(port, (err) => { //  <------ app por server

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});