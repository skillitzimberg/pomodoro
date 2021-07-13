const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const startWorkTimer = document.getElementById("start-work-timer");
const pauseWorkTimer = document.getElementById("pause-work-timer");
const resetWorkTimer = document.getElementById("reset-work-timer");
const bell = new Audio("bell.m4a");

startWorkTimer.addEventListener("click", startTimer);
pauseWorkTimer.addEventListener("click", pauseTimer);
resetWorkTimer.addEventListener("click", resetTimer);

let workIntervalID;

minutesElem.innerText = 25;
secondsElem.innerText = `00`;
let workTimeInSeconds = 25 * 60; // 1500 seconds

function startTimer() {
    startWorkTimer.disabled = true;
    
    workIntervalID = setInterval(function() {
        workTimeInSeconds--;
        const minutes = Math.floor(workTimeInSeconds / 60);
        const seconds = workTimeInSeconds % 60;
        
        minutesElem.innerText = minutes < 10 ? `0${minutes}` : minutes;
        secondsElem.innerText = seconds < 10 ? `0${seconds}` : seconds;
        if(workTimeInSeconds <= 0) {
            bell.play();
            clearInterval(workIntervalID)
            resetTimer();
        };
    }, 1000);
}

function pauseTimer() {
    startWorkTimer.disabled = false;
    clearInterval(workIntervalID);
}

function resetTimer() {
    startWorkTimer.disabled = false;
    clearInterval(workIntervalID);
    minutesElem.innerText = 25;
    secondsElem.innerText = `00`;
    workTimeInSeconds = 25 * 60;
}