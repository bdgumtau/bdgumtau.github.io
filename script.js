document.addEventListener("DOMContentLoaded", function () {
  const startDate = new Date("2024-12-07T00:00:00");
  const endDate = new Date("2025-12-06T23:59:59");

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const messageEl = document.getElementById("message");

  function updateCountdown() {
    const now = new Date();

    if (now < startDate) {
      messageEl.textContent = "The countdown hasn't started yet!";
      setCountdownValues(0, 0, 0, 0);
      return;
    }

    if (now > endDate) {
      messageEl.textContent = "The countdown has ended.";
      setCountdownValues(0, 0, 0, 0);
      return;
    }

    const totalSeconds = Math.floor((endDate - now) / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setCountdownValues(days, hours, minutes, seconds);
    messageEl.textContent = "";
  }

  function setCountdownValues(d, h, m, s) {
    daysEl.textContent = d;
    hoursEl.textContent = h;
    minutesEl.textContent = m;
    secondsEl.textContent = s;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});

const startDate = new Date("2025-08-01T00:00:00");
const endDate = new Date("2025-09-30T23:59:59");
