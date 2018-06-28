function start(){
    document.getElementById("startButton").disabled = true;

    let progressBar = document.getElementById("progressBar");
    let text = document.getElementById("progressText");

    let counter = 2;
    let intervalId = setInterval(function() {
        if(counter < 100){
            progressBar.style.width = counter + "%";
            counter += 1;
            text.innerHTML = counter + "%";
        }
        else{
            clearInterval(intervalId);
        }
    }, 30);

    document.getElementById("revertButton").disabled = false;

}

function revert(){
    document.getElementById("revertButton").disabled = true;

    let progressBar = document.getElementById("progressBar");
    let progressText = document.getElementById("progressText");
    let counter = 100;
    let intervalId = setInterval(function() {
        if(counter > 0){
            progressBar.style.width = counter + "%";
            counter -= 1;
            progressText.innerHTML = counter + "%";
        }
        else{
            clearInterval(intervalId);
        }
    }, 30);

    document.getElementById("startButton").disabled = false;

}