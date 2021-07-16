function init(workDuration, restDuration) {  
    const work = workDuration * 60;
    const rest = restDuration * 60; 
    const timerType = document.getElementById("timer-type");
    const startButton = document.getElementById("start-timer");
    const pauseButton = document.getElementById("pause-timer");
    const resetButton = document.getElementById("reset-timer");
    const switchButton = document.getElementById("switch-timers");

    let timeRemaining = work;
    let isRestTimer = false;
    let intervalId;

    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
    resetButton.addEventListener("click", resetTimer);
    switchButton.addEventListener("click", switchTimers);

    renderTime(timeRemaining);

    return {
        work,
        rest,
        timerType,
        startButton,
        pauseButton,
        resetButton,
        switchButton,
        timeRemaining,
        isRestTimer,
        intervalId,
    };
}

function renderTime(time) {
    const display = document.getElementById("time-display");
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    display.textContent = `${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}`;
}

function startTimer() {
    timer.startButton.disabled = true;
    timer.switchButton.disabled = true;
    timer.intervalId = setInterval(function() {
        timer.timeRemaining--;
        renderTime(timer.timeRemaining);

        if(timer.timeRemaining <= 0) {
            const bell = new Audio("bell.m4a");
            bell.play();
            clearInterval(timer.intervalId);
            resetTimer();
        };

    }, 1000);
}

function pauseTimer() {
    timer.startButton.disabled = false;
    timer.switchButton.disabled = false;
    clearInterval(timer.intervalId);
}

function resetTimer() {
    timer.startButton.disabled = false;
    timer.switchButton.disabled = false;
    clearInterval(timer.intervalId);

    timer.isRestTimer ? 
        timer.timeRemaining = timer.rest : 
        timer.timeRemaining = timer.work;

    renderTime(timer.timeRemaining);
}

function switchTimers() {
    timer.isRestTimer ? 
        (renderSwitchText("Rest"), 
        renderTimerText("Work"), 
        timer.timeRemaining = timer.work) : 
        (renderSwitchText("Work"), 
        renderTimerText("Rest"), 
        timer.timeRemaining = timer.rest);

    timer.isRestTimer = !timer.isRestTimer;
    renderTime(timer.timeRemaining);
}

function renderSwitchText(text) {
    timer.switchButton.textContent = `Switch to ${text} timer`;
}

function renderTimerText(text) {
    timer.timerType.textContent = text;
}

function addLeadingZeros(number) {
    return number < 10 ? `0${number}` : number
}

const timer = init(0.5, 5);