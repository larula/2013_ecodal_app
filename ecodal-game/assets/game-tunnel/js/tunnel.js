function secureGame() {

    var that = this;
    var alive = true;
    var score = 0;
    var tunnel_width = 420;

    function playerKill() {
        alive = false;
        return true;
    }

    function lifeCheck() {
        return alive;
    }

    this.killPlayer = function () {
        playerKill();
        return true;
    }

    this.checkLife = function () {
        return lifeCheck();
    }

    function scoreGet() {
        return score;
    }

    function scoreInc() {
        if (alive) {
            score++;
        }

        return true;
    }

    this.getScore = function () {
        return scoreGet();
    }


    this.incScore = function () {
        scoreInc();
        return true;
    }


    function tunnelShrink() {
        tunnel_width -= 10;
        return true;
    }

    function tunnelWidth() {
        return tunnel_width;
    }

    this.shrinkTunnel = function () {
        tunnelShrink();
        return true;
    }

    this.widthTunnel = function () {
        return tunnelWidth();
    }

}

var bg_val = 0; // background scroll position

var rail_left = 0; // left edge of game container

var rail_right = 700; // right edge of game container

var ship_x = 334; // starting position of ship

var pos_x = 334; // starting position of center of movement

var c_s = 0; // counter for score update

var c_r = 0; // counter for random tunnel update

var c_w = 0; // counter for wall width update

var t_state = 0; // tunnel movement, 0 = left, 1 = right

left_wall = new Array(20);

right_wall = new Array(20);

// initiate variables, arrays
function initTunnel() {

    tunnelGame = new secureGame();

    rail_left = document.getElementById('tunnel').offsetLeft;

    rail_right += rail_left;

    y = 0;
    for (y = 0; y < 20; y++) {
        left_wall[y] = 80;
        right_wall[y] = 700;
    }

    $('img.left_wall').each(function (i) {
        y = i * 25;
        $(this).css('top', '' + y + 'px');
        $(this).css('display', 'block');
    });

    $("img.right_wall").each(function (i) {
        y = i * 25;
        $(this).css('top', '' + y + 'px');
        $(this).css('display', 'block');
    });

    $('div#score_table').click(function () {

        $('table').remove('#high_scores');

        $('div#score_table').css('display', 'none');

        restartTunnel();

        updateTunnel();

    });

}

function restartTunnel() {

    tunnelGame = new secureGame();

    if ('object' == typeof console) {
        console.warn("No cheating!");
    }

    ship_x = 334;

    c_s = 0;

    c_r = 0;

    c_w = 0;

    $('span#score').text('' + 0);

    $('img#ship').css('left', ship_x + 'px');

    y = 0;
    for (y = 0; y < 20; y++) {
        left_wall[y] = 80;
        right_wall[y] = 400;
    }

    $('img#ship').fadeIn('slow');

    $('img.left_wall').each(function (i) {
        y = i * 25;
        $(this).css('top', '' + y + 'px');
        $(this).css('display', 'block');
    });

    $("img.right_wall").each(function (i) {
        y = i * 25;
        $(this).css('top', '' + y + 'px');
        $(this).css('display', 'block');
    });

}

// main game logic
function updateTunnel() {

    bg_val = bg_val + 2;

    if (bg_val > 20) bg_val = 0;

    if (ship_x + 32 < 700) {
        if (ship_x + 46 < pos_x) ship_x += 4;
        else if (ship_x + 16 < pos_x) ship_x += 2;
    }
    if (ship_x > 0) {
        if (ship_x - 14 > pos_x) ship_x -= 4;
        else if (ship_x + 16 > pos_x) ship_x -= 2;
    }

    $('img#ship').css('left', ship_x + 'px');

    c_r++;

    if (c_r > 20) {
        c_r = 0;
        t_state = Math.floor(Math.random() * 2);
    }

    if (left_wall[0] < 10) {
        t_state = 1;
    }
    else if (right_wall[0] > 750) {
        t_state = 0;
    }

    y = 0;
    for (y = 20; y > 0; y--) {
        left_wall[y] = left_wall[y - 1];
        right_wall[y] = right_wall[y - 1];
    }

    if (t_state == 0) {
        left_wall[0] -= 4;
    }
    if (t_state == 1) {
        left_wall[0] += 4;
    }

    right_wall[0] = left_wall[0] + tunnelGame.widthTunnel();

    $('img.left_wall').each(function (i) {
        $(this).css('left', '' + left_wall[i] + 'px');
    });

    $("img.right_wall").each(function (i) {
        $(this).css('left', '' + right_wall[i] + 'px');
    });

    if (tunnelGame.widthTunnel() >= 120) {
        c_w++;
        if (c_w > 100) {
            c_w = 0;
            tunnelGame.shrinkTunnel();
            left_wall[0] += 20;
        }
    }

    c_s++;

    if (c_s > 20) {
        c_s = 0;
        tunnelGame.incScore();
        $('span#score').text('' + tunnelGame.getScore());
    }

    /* checking collision */
    if (ship_x <= left_wall[18] + 20 || ship_x + 32 >= right_wall[18]) {
        tunnelGame.killPlayer();
    }

    /* running game logic repeatedly */
    if (tunnelGame.checkLife()) {
        setTimeout('updateTunnel()', 10);
    }
    else {
        console.log('enviar los puntos' + tunnelGame.getScore());


        $('img#ship').fadeOut('slow');
        $('img.left_wall').css('display', 'none');
        $('img.right_wall').css('display', 'none');
        $('p#welcome').css('display', 'block');

    }

}

function scoreUpdate() {

    $('form#high_score').submit(function () {

        var player_name = $('input#player_name').val();

        var xyz = $('input#ts').val();

        if (player_name.length > 0) {

            $(this).css('display', 'none');

        }

        return false;

    });

    $('form#high_score').css('display', 'block');

}

/* issue ajax request to get html for high score table */
function showHighScores() {

    var html = $.ajax({
        url: "high-scores.php",
        async: false
    }).responseText;

    $('div#score_table').prepend(html);

    $('div#score_table').css('display', 'block');

}

$(document).ready(function () {
    /*
     $('p#welcome').css('display','block');

     $('p#welcome').click(function(){

     $('p#welcome').css('display','none');
     //initTunnel();
     //updateTunnel();
     restartTunnel();
     initTunnel();
     updateTunnel();

     });
     */
});

/* checks movement relative to game container */
$(document).mousemove(function (e) {
    pos_x = e.pageX - rail_left;
});
    
