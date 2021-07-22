(function () {
  const work = 25 * 60;
  const rest = 5 * 60;

  const startButton = document.getElementById("start-timer");
  startButton.addEventListener("click", startTimer);

  const pauseButton = document.getElementById("pause-timer");
  pauseButton.addEventListener("click", pauseTimer);

  const resetButton = document.getElementById("reset-timer");
  resetButton.addEventListener("click", resetTimer);

  const switchButton = document.getElementById("switch-timers");
  switchButton.addEventListener("click", switchTimers);

  const renderSwitchText = (text) =>
    (switchButton.textContent = `Switch to ${text} timer`);

  const renderTimerText = (text) =>
    (document.getElementById("timer-type").textContent = text);

  const addLeadingZeros = (number) => (number < 10 ? `0${number}` : number);

  const playSound = (sound) => sound.play();

  let timeRemaining = work;
  let isRestTimer = false;
  let intervalId;

  function renderTime(time) {
    const minutes = addLeadingZeros(Math.floor(time / 60));
    const seconds = addLeadingZeros(time % 60);

    document.getElementById(
      "time-display"
    ).textContent = `${minutes}:${seconds}`;
  }

  function startTimer() {
    startButton.disabled = true;
    switchButton.disabled = true;
    intervalId = setInterval(function () {
      timeRemaining--;
      renderTime(timeRemaining);

      if (timeRemaining <= 0) {
        playSound(new Audio("bell.m4a"));
        resetTimer();
      }
    }, 1000);
  }

  function pauseTimer() {
    startButton.disabled = false;
    switchButton.disabled = false;
    clearInterval(intervalId);
  }

  function resetTimer() {
    startButton.disabled = false;
    switchButton.disabled = false;
    clearInterval(intervalId);

    isRestTimer ? (timeRemaining = rest) : (timeRemaining = work);

    renderTime(timeRemaining);
  }

  function switchTimers() {
    isRestTimer
      ? (renderSwitchText("Rest"),
        renderTimerText("Work"),
        (timeRemaining = work))
      : (renderSwitchText("Work"),
        renderTimerText("Rest"),
        (timeRemaining = rest));

    isRestTimer = !isRestTimer;
    renderTime(timeRemaining);
  }

  renderTime(timeRemaining);
})();
