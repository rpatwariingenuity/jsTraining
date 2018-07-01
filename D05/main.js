// NOTE:
// Unless explicitely specified, all lengths are in px
// Default Values are given in comments. When in doubt, use default


// declare some requied constants
const INIT_X = 150;                 // X Offset. --------> Default = 0
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
ctx.strokeStyle = "blue";
ctx.moveTo(0, HEIGHT);


// declare global variables
let x = 0;
let y = 0;
let myReq;



// function to move the block element
function moveDiv(timestamp) {
    x += STEP;
    box.style.marginLeft = INIT_X + x + "px";
    y = HEIGHT - HEIGHT * Math.sin(x * FREQUENCY);
    box.style.marginTop = INIT_Y + y + "px";
    ctx.lineTo(x, y);
    ctx.stroke();

    if (x <= WIDTH - BOX_W) {
        myReq = requestAnimationFrame(moveDiv) // call requestAnimationFrame again to animate next frame
    }
    else {
        box.style.marginLeft = INIT_X + WIDTH - BOX_W + "px";
        cancelAnimationFrame(myReq);
    }
}


// The Amination initiated here
myReq = requestAnimationFrame(moveDiv);

