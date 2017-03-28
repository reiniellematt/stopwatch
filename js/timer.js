// code for this is inspired by https://gist.github.com/electricg/4372563

var watch = function() {
    var startTime = 0;
    var lapTime = 0;

    var now = function() {
        return(new Date()).getTime();
    };

    this.start = function() {
        startTime = startTime ? startTime : now();
    };

    this.stop = function() {
        lapTime = startTime ? lapTime + now() - startTime : lapTime;
        startTime = 0;
    }

    this.reset = function() {
        lapTime = startTime = 0;
    }

    this.time = function() {
        return lapTime + (startTime ? now() - startTime : 0);
    }
}

var x = new watch();
var $time;
var clockTimer;
var running = false;
var countdown = 0;
var timer;

function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
}

function formatTime(time) {
    var h = m = s = ms = 0;
    var newTime = " ";

    h = Math.floor(time / (60 * 60 * 1000));
    time = time % (60 * 60 * 1000);
    m = Math.floor(time / (60 * 1000));
    time = time % (60 * 1000);
    s = Math.floor( time / 1000);
    ms = time % 1000;

    newTime = pad(h, 2) + " : " + pad(m, 2) + " : " + pad(s, 2) + " : " + pad(ms, 3);
    return newTime;
}

function show() {
    $time = document.getElementById("time");
    update();
}

function update() {
    $time.innerHTML = formatTime(x.time());
}

function start() {
    clockTimer = setInterval("update()", 1);
    x.start();
    running = true;
}

function stop() {
    x.stop();
    clearInterval(clockTimer);
    running = false;
}

function reset() {
    stop();
    x.reset();
    update();
}