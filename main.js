const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const startWorkTimer = document.getElementById("start-work-timer");
startWorkTimer.addEventListener("click", runWorkTimer);

minutesElem.innerText = 25;
secondsElem.innerText = `00`;

function runWorkTimer(event) {    
    console.log(event.target);
    event.target.disabled = true;
    console.log(event.target);
    let timeInSeconds = 25 * 60; // 1500 seconds
    
    const intervalID = setInterval(function() {
        timeInSeconds--;
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        
        minutesElem.innerText = minutes < 10 ? `0${minutes}` : minutes;
        secondsElem.innerText = seconds < 10 ? `0${seconds}` : seconds;
        if(timeInSeconds <= 0) clearInterval(intervalID);
    }, 1000);
}
