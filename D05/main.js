// NOTE:
// Unless explicitely specified, all lengths are in px
// Default Values are given in comments. When in doubt, use default


// declare some requied constants
const INIT_X = 200;                 // X Offset. --------> Default = 0
const INIT_Y = 100;                 // Y-Offset. --------> Default = 0
const WIDTH = 800;                  // The sine wave will oscillate betwen this window size. --------> Default = window.innerWidth * 0.8;
const HEIGHT = 100;
const FREQUENCY = 1 / 20;           // Frequncy = 1 / TimePeriod. --------> Default = 20
const STEP = 1.6;                   // How to increase x. Then real time and TimePeriod (1/Frequency) will sync. --------> Default = 1
const BOX_W = 20;                   // Dimension of oscillator --------> Default = 15
const BOX_H = 20;


// set the initial property of moving box element 
let box = document.getElementById("box");
box.style.marginTop = HEIGHT / 2 + "px";
box.style.height = BOX_H + "px";
box.style.width = BOX_W + "px";


// set the initial property of canvas
let canvas = document.getElementById("myCanvas");
canvas.style.marginTop = INIT_Y + BOX_H / 2 + "px";
canvas.style.marginLeft = INIT_X + BOX_W / 2 + "px";
canvas.style.border = "2px red solid";
let ctx = canvas.getContext("2d");
ctx.canvas.height = HEIGHT * 2;
ctx.canvas.width = WIDTH - BOX_W;
ctx.beginPath();
ctx.moveTo(0, HEIGHT);                  // Modify as moveTo(0, 0) for cos()


// declare global variables
let x = 0;
let y = 0;
let myReq;


// Declare all necessary functions
function getSin(xx) {
    return HEIGHT - HEIGHT * Math.sin(xx * FREQUENCY);  // Height works as Amplitude
}

function getCos(xx) {
    return HEIGHT - HEIGHT * Math.cos(xx * FREQUENCY);
}

function getTan(xx) {
    return HEIGHT - HEIGHT * Math.tan(xx * FREQUENCY);
}

let func = 0;       // 0: sin, 1: cos, 2: tan

// function to move the block element
function moveDiv(timestamp, func) {
    x += STEP;
    box.style.marginLeft = INIT_X + x + "px";

    switch (func) {
        case 0:
            y = getSin(x);
            ctx.strokeStyle = "blue";
            break;
        case 1:
            y = getCos(x);
            ctx.strokeStyle = "red";
            break;
        case 2:
            y = getTan(x);
            ctx.strokeStyle = "white";
            break;

        default:
            y = getSin(x);
            ctx.strokeStyle = "blue";
            break;
    }

    box.style.marginTop = INIT_Y + y + "px";

    ctx.lineTo(x, y);
    ctx.stroke();

    if (x <= WIDTH - BOX_W) {
        myReq = requestAnimationFrame(function (timestamp) {
            moveDiv(timestamp, func)
        }); // call requestAnimationFrame again to animate next frame
    }
    else {
        box.style.marginLeft = INIT_X + WIDTH - BOX_W + "px";
        cancelAnimationFrame(myReq);
    }
}


// The Amination initiated here
myReq = requestAnimationFrame(function (timestamp) {
    moveDiv(timestamp, func)
});

function clearCanvas() {
    cancelAnimationFrame(myReq);
    //ctx.clearRect(INIT_X, INIT_Y, canvas.width, canvas.height);
    canvas.width = canvas.width;        // Hack to clear the canvas. 

    ctx.beginPath();

    x = 0;
    y = 0;
}

function createSin() {
    clearCanvas();

    ctx.moveTo(0, HEIGHT);                      // Modify as moveTo(0, 0) for cos()

    func = 0;       // 0: sin, 1: cos, 2: tan
    myReq = requestAnimationFrame(function (timestamp) {
        moveDiv(timestamp, func)
    });
}

function createCos() {
    clearCanvas();

    ctx.moveTo(0, 0);                      // Modify as moveTo(0, 0) for cos()

    func = 1;       // 0: sin, 1: cos, 2: tan
    myReq = requestAnimationFrame(function (timestamp) {
        moveDiv(timestamp, func)
    });
}

function createTan() {
    clearCanvas();

    ctx.moveTo(0, HEIGHT);                      // Modify as moveTo(0, 0) for cos()

    func = 2;       // 0: sin, 1: cos, 2: tan
    myReq = requestAnimationFrame(function (timestamp) {
        moveDiv(timestamp, func)
    });
}