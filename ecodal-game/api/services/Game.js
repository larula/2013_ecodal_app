var sails = require('sails');
var underscore = require('underscore');

var Game = (function (io, _) {
    var instance;

    function init() {
        var worlds = ['argentina'];
        var stages = ['house'];
        var clients = {};

        function registerClient(socket, data) {
            clients[socket.id] = {
                socket: socket,
                data: data
            }
        }

        function unregisterClient(socket) {
            delete clients[socket.id];
        }

        function getOtherClients(id, room) {
            var otherClients = [];

            _.each(clients, function (client) {
                if (client.socket.id != id && client.data.room == room) {
                    otherClients.push(client);
                }
            })

            return otherClients;
        }

        function getClient(id) {
            return clients[id];
        }

        io.sockets.on('connection', function (socket) {
            console.log('connection', socket.id);

            socket.on('disconnect', function () {
                console.log('server', 'disconnect', socket.id);
                var client = getClient(socket.id);

                if (client) {
                    // Notificar a los otros usuarios del room
                    socket.broadcast.to(client.data.room).emit('leave', socket.id);

                    unregisterClient(socket);
                }

                console.log('client ' + socket.id + ' disconnected');
            });

            socket.on('join', function (data) {
                console.log('server', 'join', data);

                data = data || {};
                var world = data.world || 'argentina'
                var stage = data.stage || 'house';
                var room = world + '.' + stage;

                console.log('client ' + socket.id + ' joining ' + room + ' room');

                socket.join(room);

                // Enviar estado del stage al usuario que acaba de unirse
                var users = [];
                var otherClients = getOtherClients(socket.id, room);
                _.each(otherClients, function (client) {
                    users.push(client.data);
                });
                socket.emit('stageStatus', {users: users});

                // Notificar a los otros usuarios del room
                data.id = socket.id; // Incluir el id del usuario
                data.world = world;
                data.stage = stage;
                data.room = room;
                socket.broadcast.to(room).emit('join', data);

                registerClient(socket, data);

                console.log('clients in ' + room, io.sockets.clients(room).length);
            });

            socket.on('walk', function (data) {
                console.log('server', 'walk', data);
                data = data || {};
                var client = getClient(socket.id);

                if (client) {
                    var x = data.x || 0;
                    var y = data.y || 0;

                    // Actualizar estado
                    client.data.x = x;
                    client.data.y = y;

                    // Notificar al resto de los usuarios del room
                    data.id = socket.id;
                    socket.broadcast.to(client.data.room).emit('walk', data);
                }
            });

            socket.on('chat', function (data) {
                console.log('server', 'chat', data);
                data = data || {};
                var client = getClient(socket.id);

                if (client) {
                    // Notificar al resto de los usuarios del room
                    data.id = socket.id;
                    socket.broadcast.to(client.data.room).emit('chat', data);
                }
            });

            socket.on('emoticon', function (data) {
                console.log('server', 'emoticon', data);
                data = data || {};
                var client = getClient(socket.id);

                if (client) {
                    // Notificar al resto de los usuarios del room
                    data.id = socket.id;
                    socket.broadcast.to(client.data.room).emit('emoticon', data);
                }
            });
        });

        function privateMethod() {

        }

        return {
            publicMethod: function () {

            }
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})(sails.io, underscore);

module.exports = Game;
