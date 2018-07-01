let box = document.getElementById("box");
let x = 10;
const INIT_X = 0;
const INIT_Y = 0;
const WIDTH = 1000;
const AMPLITUDE = 100;
const FREQUENCY = 1 / 20;
const STEP = 1.6;

function moveDiv(timestamp) {
    x += STEP;
    box.style.marginLeft = INIT_X + x + "px";
    box.style.marginTop = (AMPLITUDE - AMPLITUDE * Math.sin(x * FREQUENCY)) + "px";

    if (x <= WIDTH) {
        requestAnimationFrame(moveDiv) // call requestAnimationFrame again to animate next frame
    }
    else {
        box.style.marginLeft = WIDTH + "px";
    }

}

requestAnimationFrame(moveDiv);