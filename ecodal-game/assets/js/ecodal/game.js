var game;

$(document).ready(function () {
    // Constants
    var VIEWPORT_WIDTH = 920;
    var VIEWPORT_HEIGHT = 560;
    var TILE_WIDTH = 40;
    var TILE_HEIGHT = 40;
    var WORLD_NAME = 'argentina';
    var DEFAULT_STAGE = 'house';
    var AVATAR_HEIGHT = 300;
    var CHAT_TIMEOUT = 5000;
    var POINTS_TIP = 5;

    // Vars
    var conn = window.socket;
    var tween;
    var nene;
    var others = {};
    var layers = {
        background: null,
        trigger: null,
        character: null,
        gui: null
    };
    var users = {};
    var map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    var grid = new PF.Grid(map[0].length, map.length, map);

    var finder = new PF.AStarFinder();

    var sounds = {
        music: null,
        applause: null
    }

    // State
    var soundPaused = false;
    var points = 0;
    var connListenersInitialized = false;
    var needUpdate = false;
    var pointerBlocked = false;

    game = new Phaser.Game(VIEWPORT_WIDTH, VIEWPORT_HEIGHT, Phaser.AUTO, 'game', {preload: preload, create: create, update: update, render: render});

    function toggleSound() {
        soundPaused = !soundPaused;

        if (soundPaused) {
            game.sound.pauseAll();
        } else {
            game.sound.resumeAll();
        }
    }

    function getTileByCoordinates(x, y) {
        return {
            x: Math.floor(x / TILE_WIDTH),
            y: Math.floor(y / TILE_HEIGHT)
        }
    }

    function getCoordinatesByTile(colIndex, rowIndex) {
        return {
            x: (colIndex * TILE_WIDTH) + Math.round(TILE_WIDTH * 0.5),
            y: (rowIndex * TILE_HEIGHT) + Math.round(TILE_HEIGHT * 0.5)
        }
    }

    function getTileCoordinates(x, y) {
        var tile = getTileByCoordinates(x, y);
        return getCoordinatesByTile(tile.x, tile.y);
    }

    function createUser(data) {
        console.log('creating user', data);

        var x = data.x || 0;
        var y = data.y || 0;
        var avatar = data.avatar || 'avatar_nene';
        var username = data.username || '';

        var startPosition = getTileCoordinates(x, y);

        //var user = new Phaser.Sprite(game, x, y);
        var user = new Phaser.Sprite(game, x, y, avatar);
        user.name = "user";

        //var userBody = new Phaser.Sprite(game, 0, 0, avatar);
        var userBody = user;

        userBody.name = "user_body";
        userBody.anchor.setTo(0.5, 1);
        userBody.animations.add('run', [0, 1, 2, 3, 4, 5]);
        userBody.animations.add('idle', [6]);
        userBody.animations.stop('idle');

        //user.addChild(userBody);

        var userName = new Phaser.Text(game, 0, 0, username, {font: "22px Arial", fill: "#77c92d", stroke: "#000000", strokeThickness: 3});
        userName.name = "user_name";
        userName.anchor.setTo(0.5, 0);
        user.addChild(userName);

        var chatBubble = new Phaser.Sprite(game, 0, -(AVATAR_HEIGHT - 20), 'emoticon-sprite');
        chatBubble.animations.add('emoticon-1', [0]);
        chatBubble.animations.add('emoticon-2', [1]);
        chatBubble.animations.add('emoticon-3', [2]);
        chatBubble.animations.add('emoticon-4', [3]);
        chatBubble.animations.add('emoticon-5', [4]);
        chatBubble.animations.add('emoticon-6', [5]);
        chatBubble.anchor.setTo(0.5, 1);
        chatBubble.name = "user_chat_bubble";
        chatBubble.alpha = 0;
        user.addChild(chatBubble);

        var chatText = new Phaser.Text(game, 0, -(AVATAR_HEIGHT), "", {font: "18px Arial", fill: "#FFFFFF", stroke: "#000000", strokeThickness: 3});
        chatText.anchor.setTo(0.5, 1);
        chatText.name = "user_chat_text";
        user.addChild(chatText);

        user.id = data.id;
        user.avatar = avatar;
        user.username = username;
        user.x = x;
        user.y = y;

        return user;
    }

    function addUser(user) {
        users[user.id] = user;
        layers.character.add(user);
        needUpdate = true;
    }

    function removeUser(id) {
        var user = users[id];

        if (user) {
            console.log('remove', id, user);
            layers.character.remove(user);
            delete users[id];
        }

        needUpdate = true;
    }

    function getUser(id) {
        return users[id];
    }

    function getMapBlock(x, y) {
        var row = map[y];

        if (row === undefined) {
            return null;
        }

        return row[x] !== undefined ? row[x] : null;
    }

    function isWalkablePosition(x, y) {
        var tile = getTileByCoordinates(x, y);
        var block = getMapBlock(tile.x, tile.y);

        return block === 0;
    }

    function getNearestWalkablePosition(x, y) {
        if (!isWalkablePosition(x, y)) {
            var tile = getTileByCoordinates(x, y);
            var c = map.length;
            for (var i = 0; i < c; i++) {
                var row = map[i];
                if (row[tile.x] === 0) {
                    return {
                        x: x,
                        y: i * TILE_HEIGHT
                    }
                }
            }
        } else {
            return {
                x: x,
                y: y
            }
        }

        return null;
    }

    function findPath(startX, startY, endX, endY) {
        var startTile = getTileByCoordinates(startX, startY);
        var endTile = getTileByCoordinates(endX, endY);

        if (_.isEqual(startTile, endTile)) {
            return null;
        }

        // Esta libre el tile destino?
        var origin = getMapBlock(startTile.x, startTile.y);
        var dest = getMapBlock(endTile.x, endTile.y);

        if (origin === null) {
            return null;
        }

        if (dest === null) {
            return null;
        }

        if (dest != 0) {
            // Buscar un tile desbloqueado en el eje vertical
            var nearestWalkable = getNearestWalkablePosition(endX, endY);

            if (!nearestWalkable) {
                return null;
            }

            return findPath(startX, startY, nearestWalkable.x, nearestWalkable.y);
        }

        return finder.findPath(startTile.x, startTile.y, endTile.x, endTile.y, grid.clone());
    }

    function join() {
        send('join', {world: WORLD_NAME, stage: DEFAULT_STAGE, x: nene.x, y: nene.y, avatar: nene.avatar, username: nene.username});
    }

    function walk(user, x, y) {
        var path = findPath(user.x, user.y, x, y);

        if (!path) {
            return;
        }

        //var body = user.getChildAt(0);
        var body = user;
        var userName = user.getChildAt(0);
        var chatBubble = user.getChildAt(1);
        var chatText = user.getChildAt(2);

        // Remover la posición inicial
        path.shift();

        TweenMax.killTweensOf(user);
        body.animations.play('run', 8, true);
        body.scale.x = x > user.x ? -1 : 1;
        userName.scale.x = chatBubble.scale.x = chatText.scale.x = body.scale.x;
        var timeline = new TimelineMax({onComplete: function () {
            body.animations.play('idle');
        }});

        _.each(path, function (arr) {
            var targetPosition = getCoordinatesByTile(arr[0], arr[1]);
            timeline.append(TweenMax.to(user, 0.1, {
                x: targetPosition.x,
                y: targetPosition.y,
                roundProps: ["x", "y"],
                ease: Linear.easeNone,
                onUpdate: function () {
                    needUpdate = true;
                }
            }));
        });

        needUpdate = true;
    }

    function chat(user, message, useTimeout) {
        useTimeout = useTimeout !== false;

        var emoticon = user.getChildAt(1);
        emoticon.alpha = 0;

        if (user.chatTimeout) {
            clearTimeout(user.chatTimeout);
        }

        var text = user.getChildAt(2);
        text.setText(message);

        if (useTimeout) {
            user.chatTimeout = setTimeout(function () {
                chat(user, "", false);
            }, CHAT_TIMEOUT);
        }
    }

    function emoticon(user, emoticonName) {
        console.log('emoticon, user', emoticonName);
        chat(user, "", false);

        if (user.chatTimeout) {
            clearTimeout(user.chatTimeout);
        }

        var emoticon = user.getChildAt(1);
        emoticon.play(emoticonName);
        emoticon.alpha = 1;

        user.chatTimeout = setTimeout(function () {
            emoticon.alpha = 0;
        }, CHAT_TIMEOUT);

    }

    function initBackgroundListeners() {
        layers.background.forEach(function (background) {
            background.inputEnabled = true;
            background.events.onInputUp.add(function () {
                handleBackgroundClick(game.input);
            });
        });
    }

    function initConnListeners() {
        if (connListenersInitialized) {
            return;
        }

        connListenersInitialized = true;

        conn.on('message', function () {
            console.log('conn', 'message', arguments);
        });

        // Un usuario se ha unido al stage
        conn.on('join', function (data) {
            // No podemos unir un usuario sin id
            var user = createUser(data);
            if (user) {
                addUser(user);
            }
        });

        conn.on('stageStatus', function (data) {
            console.log('conn', 'stageStatus', data);
            var users = data.users || [];

            _.each(users, function (userData) {
                var user = createUser(userData);
                if (user) {
                    addUser(user);
                }
            });
        });

        conn.on('kill', function (clientId) {
            layers.character.remove(others[params.userId]);
            delete others[params.userId];
        });

        conn.on('walk', function (data) {
            console.log('conn', 'walk', data);
            var user = getUser(data.id);
            if (user) {
                var x = data.x || 0;
                var y = data.y || 0;
                walk(user, x, y);
            }
        });

        conn.on('leave', function (id) {
            removeUser(id);
        });

        conn.on('chat', function (data) {
            console.log('conn', 'chat', data);
            var user = getUser(data.id);
            if (user) {
                var message = data.message || '';
                chat(user, message);
            }
        });

        conn.on('emoticon', function (data) {
            console.log('conn', 'emoticon', data);
            var user = getUser(data.id);
            if (user) {
                var emoticonName = data.emoticon || 'emoticon-1';
                emoticon(user, emoticonName);
            }
        });
    }

    function initConn() {
        console.log('initConn', conn.socket.connected);

        if (conn.socket.connected) {
            initConnListeners();
            join();
        }

        conn.on('connect', function connect() {
            console.log('conn', 'connect', WORLD_NAME, arguments);
            initConnListeners();
            join();
        });

        conn.on('connecting', function connect() {
            console.log('conn', 'connecting', WORLD_NAME, arguments);
        });

        conn.on('disconnect', function disconnect() {
            console.log('conn', 'disconnect', WORLD_NAME, arguments);
        });

        conn.on('connect_failed', function connect_failed() {
            console.log('conn', 'connection_failed', WORLD_NAME, arguments);
        });

        conn.on('message', function () {
            console.log('conn', 'message', WORLD_NAME, arguments);
        });

        conn.on('error', function error() {
            console.log('conn', 'error', WORLD_NAME, arguments);
        });

        conn.on('reconnect_failed', function reconnect_failed() {
            console.log('conn', 'reconnect_failed', WORLD_NAME, arguments);
        });

        conn.on('reconnect', function reconnect() {
            console.log('conn', 'reconnect', WORLD_NAME, arguments);
        });

        conn.on('reconnecting', function reconnecting() {
            console.log('conn', 'reconnecting', WORLD_NAME, arguments);
        });
    }

    function send(action, params) {
        console.log('send', action, params);
        if (!conn) {
            console.log('conn', 'not ready!');
            return;
        }

        if (!conn.socket.connected) {
            console.log('conn', 'not connected!');
            return;
        }

        conn.emit.call(conn, action, params);
    }

    function sortCharacters() {
        try {
            layers.character.sort();
        } catch (Error) {

        }

    }

    function addTrigger(texture, x, y, cb) {
        var trigger = layers.trigger.create(x, y, texture);
        trigger.inputEnabled = true;
        trigger.input.useHandCursor = true;
        trigger.events.onInputUp.add(function () {
            if (pointerInCamera() && typeof cb == 'function') {
                cb();
            }
        });

        TweenMax.fromTo(trigger, 0.7, {
            alpha: 1
        }, {
            alpha: 0,
            repeat: -1,
            yoyo: true,
            ease: Linear.easeNone
        });

        return trigger;
    }

    function openTip(type) {
        closePopup();

        $popup = openPopup(type, getTemplate(type));

        $('.close', $popup).on('click', function () {
            closePopup(type);
        });

        $('body').trigger('addPoints', POINTS_TIP);

        return $popup;
    }

    function openChat() {
        if (!popupIsOpen('chat-window')) {
            var tpl = getTemplate('chat-window');
            $popup = openPopup('chat-window', tpl, false, false);
            pointerBlocked = true;

            $('.btn-submit', $popup).on('click', function () {
                var message = $('input', $popup).val();
                send('chat', {message: message});
                chat(nene, message);
                closePopup();
            });

            $('.emoticon', $popup).on('click', function () {
                var $emoticon = $(this);
                var emoticonName = $emoticon.data('emoticon');
                send('emoticon', {emoticon: emoticonName});
                emoticon(nene, emoticonName);
                closePopup();
            });
        }
    }

    function inCamera(x, y) {
        return !(x < 0 || x > VIEWPORT_WIDTH || y < 0 || y > VIEWPORT_HEIGHT);
    }

    function pointerInCamera() {
        return inCamera(game.input.x, game.input.y);
    }

    function handleBackgroundClick(pointer) {
        if (pointerBlocked) {
            return;
        }

        var pointerX = pointer.x;
        var pointerY = pointer.y;

        if (!inCamera(pointerX, pointerY)) {
            return;
        }

        var worldX = pointer.worldX;
        var worldY = pointer.worldY;

        var tileCoordinates = getTileCoordinates(worldX, worldY);
        var validatedPosition = getNearestWalkablePosition(tileCoordinates.x, tileCoordinates.y);

        send('walk', {x: validatedPosition.x, y: validatedPosition.y});
        walk(nene, validatedPosition.x, validatedPosition.y);
    }

    function handleAddPoints(points) {
        console.log('addPoints', points);
    }

    /*** GUI ***/
    function getTemplate(id) {
        var tpl = $('#' + id, '#templates').clone();
        return tpl.html();
    }

    function openPopup(name, contentHtml, isModal, center) {
        isModal = isModal !== false;
        center = center !== false;

        if (isModal)
            pointerBlocked = true;

        var $game = $('#game');
        var $overlay = $('.eco-overlay', $game);

        if (!$overlay.length) {
            $overlay = $('<div class="eco-overlay"/>');
            if (isModal)
                $overlay.append('<div class="eco-modal"/>');
            $game.append($overlay);
        }

        $popup = $(contentHtml);

        if (name) {
            $popup.attr('data-name', name);
        }

        $overlay.append($popup);

        if (center) {
            $popup.css('position', 'absolute');
            $popup.css('top', '50%');
            $popup.css('left', '50%');
            $popup.css('margin-top', '-' + Math.round($popup.outerHeight() * 0.5) + 'px');
            $popup.css('margin-left', '-' + Math.round($popup.outerWidth() * 0.5) + 'px');
        }

        return $popup;
    }

    function closePopup(name) {
        pointerBlocked = false;

        if (name) {
            //TODO
        }

        $('.eco-overlay').remove();
    }

    function popupIsOpen(name) {
        return $('*[data-name="' + name + '"]').length > 0;
    }

    function openAvatarSelector() {
        var html = getTemplate('avatar-selector');
        var $popup = openPopup('avatar-selector', html);

        $('.avatar', $popup).on('click', function () {
            $('.avatar', $popup).removeClass('selected');
            $(this).addClass('selected');
        });

        $('.btn-play', $popup).on('click', function () {
            var $selected = $('.avatar.selected', $popup);
            var avatar = $selected.data('avatar');
            var name = $('input', $popup).val();
            play(avatar, name);
            closePopup('avatar-selector');
        });
    }

    function openMemotestGame() {
        var html = getTemplate('memotest-content');
        var $popup = openPopup('memotest-content', html, true, true);

        $('#jugarMemotest', $popup).on('click', function () {
            $(this).hide();

            $("#mesa", $popup).memotest('/game-memotest/imagenes/7.png', [
                '/game-memotest/imagenes/1.png',
                '/game-memotest/imagenes/2.png',
                '/game-memotest/imagenes/3.png',
                '/game-memotest/imagenes/4.png',
                '/game-memotest/imagenes/5.png',
                '/game-memotest/imagenes/6.png'
            ]);
        });

        $('.closeMemotest', $popup).on('click', function () {
            console.log('cierre');
            closePopup();
        });

        return $popup;
    }

    /*** Game Events ***/
    function preload() {
        console.log('preload');
        game.load.atlasJSONHash('avatar_nene', 'images/avatar/nene/Sprite_Nene.png', 'images/avatar/nene/Sprite_Nene.json');
        game.load.atlasJSONHash('avatar_nena', 'images/avatar/nena/Sprite_Nena.png', 'images/avatar/nena/Sprite_Nena.json');

        game.load.image('house_1', '/images/background/f_02-03.jpg');
        game.load.image('house_2', '/images/background/f_02-04.jpg');
        game.load.image('house_3', '/images/background/f_02-05.jpg');
        game.load.image('house_4', '/images/background/f_02-06.jpg');
        game.load.image('llave-luz', '/images/llave-luz.png');
        game.load.image('speech-bubble', '/images/speech-bubble.png');
        game.load.image('speech-bubble-big', '/images/speech-bubble-big.png');
        game.load.spritesheet('emoticon-sprite', '/images/chat/emoticon-sprite.png', 87, 80, 6);
        game.load.image('cuadro-ninio', '/images/cuadro-ninio.png');
        game.load.image('cuadro-ninio-glow', '/images/cuadro-ninio-glow.png');
        game.load.image('tacho', '/images/tacho.png');
        game.load.image('tacho-glow', '/images/tacho-glow.png');
        game.load.image('cortina-glow', '/images/cortina-glow.png');

        game.load.audio('music', ['/audio/preview-so-uplifting.mp3']);
        game.load.audio('applause', ['/audio/applause-1.mp3']);
    }

    function create() {
        console.log('create');
        game.stage.disableVisibilityChange = true;
        game.world.setBounds(0, 0, 3200, 600);

        layers.background = game.add.group();
        layers.trigger = game.add.group();
        layers.character = game.add.group();
        layers.gui = new Phaser.Group(game, null, 'gui', true);

        var index = 0;

        layers.background.z = index++;
        layers.trigger.z = index++;
        layers.character.z = index++;
        layers.gui.z = index++;

        // Stage map
        var bathroom = layers.background.create(0, 0, 'house_1');
        var bedroom = layers.background.create(800, 0, 'house_2');
        var kitchen = layers.background.create(1600, 0, 'house_3');
        var livingroom = layers.background.create(2400, 0, 'house_4');

        // Tips luz
        addTrigger('llave-luz', 687, 231, function () {
            if (!pointerBlocked)
                openTip('tip-luz');
        });

        addTrigger('llave-luz', 800 + 712, 252, function () {
            if (!pointerBlocked) {
                openTip('tip-luz');
            }
        });

        addTrigger('llave-luz', 800 * 2 + 687, 244, function () {
            if (!pointerBlocked) {
                openTip('tip-luz');
            }
        });

        addTrigger('llave-luz', 800 * 3 + 698, 234, function () {
            if (!pointerBlocked) {
                openTip('tip-luz');
            }
        });

        addTrigger('cortina-glow', 159, 6, function () {
            if (!pointerBlocked) {
                openTip('tip-ducha');
            }
        });

        var cuadroX = 800 + 370;
        var cuadroY = 50;
        layers.background.create(cuadroX, cuadroY, 'cuadro-ninio');
        addTrigger('cuadro-ninio-glow', cuadroX, cuadroY, function () {
            if (!pointerBlocked && pointerInCamera()) {
                openMemotestGame();
            }
        });

        var tachoX = 800 * 2 + 450;
        var tachoY = 340;
        layers.background.create(tachoX, tachoY, 'tacho');
        addTrigger('tacho-glow', tachoX, tachoY, function () {
            if (!pointerBlocked && pointerInCamera()) {
                openMemotestGame();
            }
        });

        /*
         var graphics = game.add.graphics(0, 0);
         graphics.beginFill(0xFF0000);
         graphics.lineStyle(1, 0xFF0000, 1);

         var mapWidth = 3200;
         var mapHeight = 600;

         var colCount = Math.ceil(mapWidth / TILE_WIDTH);
         var rowCount = Math.ceil(mapHeight / TILE_HEIGHT);

         for (var i = 0; i < rowCount; i++) {
         var currentY = i * TILE_HEIGHT;
         graphics.moveTo(0, currentY);
         graphics.lineTo(mapWidth, currentY);
         }

         for (var i = 0; i < colCount; i++) {
         var currentX = i * TILE_WIDTH;
         graphics.moveTo(currentX, 0);
         graphics.lineTo(currentX, mapHeight);
         }

         graphics.endFill();
         */

        // GUI
        var speechBalloon = layers.gui.create(VIEWPORT_WIDTH - 120, VIEWPORT_HEIGHT - 120, 'speech-bubble');
        speechBalloon.inputEnabled = true;
        speechBalloon.input.useHandCursor = true;
        speechBalloon.events.onInputUp.add(function () {
            if (!pointerBlocked && pointerInCamera()) {
                openChat();
            }
        });
        //speechBalloon.fixedToCamera = true;

        openAvatarSelector();

        sounds.music = game.add.audio('music');
        sounds.applause = game.add.audio('applause');

        $('.sound-control').on('click', function () {
            toggleSound();
        });
    }

    function update() {
        if (needUpdate)
            sortCharacters();

        needUpdate = false;
    }

    function render() {

    }

    function play(avatar, username) {
        console.log('play', avatar, username);

        if (username != '') {
            $('#username').html(username);
        }


        var neneStartPosition = getTileCoordinates(1420, 540);
        nene = createUser({x: neneStartPosition.x, y: neneStartPosition.y, avatar: avatar, username: username});
        addUser(nene);

        game.camera.follow(nene);

        initBackgroundListeners();
        initConn();

        sounds.music.play('', 0, 1, true);
    }

    function handleAddPoints(points) {

        var currentPoints = parseInt($('.user-points').html());

        currentPoints += points;
        $('.user-points').html(currentPoints);

        sounds.applause.play();
    }

    /* DOM Events */
    $('body').on('addPoints', function (event, points) {
        handleAddPoints(points);
    });
});
