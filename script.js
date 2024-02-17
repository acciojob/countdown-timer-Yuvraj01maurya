// Your script here.
document.addEventListener("DOMContentLoaded", function() {
  const userInput = document.getElementById("userInput");
  const startButton = document.getElementById("startButton");
  const countDown = document.getElementById("countDown");
  const endTime = document.getElementById("endTime");

  let countdownInterval;

  startButton.addEventListener("click", function() {
    const duration = parseInt(userInput.value);
    if (!isNaN(duration)) {
      startCountdown(duration);
    }
  });

  function startCountdown(duration) {
    clearInterval(countdownInterval);

    const startTime = new Date().getTime();
    const endTimeValue = startTime + duration * 60 * 1000;

    countdownInterval = setInterval(function() {
      const currentTime = new Date().getTime();
      const remainingTime = endTimeValue - currentTime;

      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        countDown.innerText = "Countdown Ended";
      } else {
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        countDown.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        const endDateTime = new Date(endTimeValue);
        const endHour = endDateTime.getHours().toString().padStart(2, '0');
        const endMinutes = endDateTime.getMinutes().toString().padStart(2, '0');
        endTime.innerText = `End Time: ${endHour}:${endMinutes}`;
      }
    }, 1000);
  }
});
