(function (socket) {
    socket.on('connect', function connect() {
        console.log('connect!');

        socket.on('stageStatus', function (data) {
            console.log('stageStatus', data);
        });

        socket.emit('suscribe', {room: 'argentina'});
    });
})(socket);
