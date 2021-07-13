const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const startWorkTimer = document.getElementById("start-work-timer");
const pauseWorkTimer = document.getElementById("pause-work-timer");
const resetWorkTimer = document.getElementById("reset-work-timer");
startWorkTimer.addEventListener("click", runWorkTimer);
pauseWorkTimer.addEventListener("click", pauseTimer);
resetWorkTimer.addEventListener("click", resetTimer);

let workIntervalID;

minutesElem.innerText = 25;
secondsElem.innerText = `00`;
let workTimeInSeconds = 25 * 60; // 1500 seconds

function runWorkTimer(event) {    
    event.target.disabled = true;
    
    workIntervalID = setInterval(function() {
        workTimeInSeconds--;
        const minutes = Math.floor(workTimeInSeconds / 60);
        const seconds = workTimeInSeconds % 60;
        
        minutesElem.innerText = minutes < 10 ? `0${minutes}` : minutes;
        secondsElem.innerText = seconds < 10 ? `0${seconds}` : seconds;
        if(workTimeInSeconds <= 0) clearInterval(workIntervalID);
    }, 1000);
}

function pauseTimer(event) {
    console.log(event.target.previousElementSibling);
    event.target.previousElementSibling.disabled = false;
    clearInterval(workIntervalID);
}

function resetTimer(event) {
}