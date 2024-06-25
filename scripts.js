const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
let timerEl = document.getElementById("timer");
let interval;
let timeLeft = 1500;
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formatedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formatedTime;
}
function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      alert("Time is Out");
      clearInterval(interval);
    }
  }, 1000);
  
}
function stopTimer() {
  clearInterval(interval)
}
function resetTimer() {
 clearInterval(interval)
 timeLeft=1500
 updateTimer()
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
