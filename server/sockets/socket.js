const { io } = require('../server'); //  <------ usa la variable io creada en el server.js

io.on('connection', (client) => {
    console.log('Usuario conectado');


    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //client.emit('enviarMensaje', data);   <-- envia solo al usuario conectado
        client.broadcast.emit('enviarMensaje', data); //  <--- envia a todos los usuarios


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'OK'
        //     });

        // } else {
        //     callback({
        //         resp: 'Error'
        //     });

        // }
    });


}); //