var socket = io(); // var para compatbilidad

//Escuchar
socket.on('connect', function() {

    console.log('conectado con el servidor');
});

//Escuchar
socket.on('disconnect', function() {

    console.log('Perdimos coneccion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

//Escuchar al servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});