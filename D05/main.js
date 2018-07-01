// declare some requied constants
const INIT_X = 0;
const INIT_Y = 0;
const WIDTH = 1000;
const HEIGHT = 100;
const FREQUENCY = 20;
const STEP = 1.6;
const BOX_W = 20;
const BOX_H = 20;

// set the initial property of moving box element 
let box = document.getElementById("box");
box.style.marginTop = HEIGHT / 2 + "px";
box.style.height = BOX_H + "px";
box.style.width = BOX_W + "px";

// set the initial properties of the canvas element
//      NOTE: We need canvas element to trace a sine wave
// let canvas = document.getElementById("myCanvas");
// canvas.style.width = WIDTH + "px";
// canvas.style.height = HEIGHT * 2 + "px";

// declare variables
let x = 10;

// function to move the block element
function moveDiv(timestamp) {
    x += STEP;
    box.style.marginLeft = INIT_X + x + "px";
    box.style.marginTop = (HEIGHT - HEIGHT * Math.sin(x / FREQUENCY)) + "px";

    if (x <= WIDTH - BOX_W) {
        requestAnimationFrame(moveDiv) // call requestAnimationFrame again to animate next frame
    }
    else {
        box.style.marginLeft = WIDTH - BOX_W + "px";
    }

}

// var ctx = canvas.getContext("2d");


// var width = ctx.canvas.width;
// var height = ctx.canvas.height;
// var scale = 20;

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.strokeStyle = "rgb(66,44,255)";

// var xx = 0;
// var yy = 0;
// var amplitude = 40;
// //ctx.moveTo(x, y);
// while (xx < WIDTH) {
//     yy = HEIGHT * Math.sin(xx / FREQUENCY);
//     ctx.lineTo(xx, yy);
//     xx = xx + 1;
// }
// ctx.stroke();





// The Amination initiated here
requestAnimationFrame(moveDiv);