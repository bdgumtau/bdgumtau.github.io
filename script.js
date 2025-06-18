const calendar = document.getElementById("calendar");
const startDate = new Date("2024-12-08");
const endDate = new Date("2025-12-06");

const modal = document.getElementById("videoModal");
const videoElement = document.getElementById("dateVideo");
const closeBtn = document.querySelector(".close");

let currentDate = new Date(startDate);

while (currentDate <= endDate) {
  const box = document.createElement("div");
  box.className = "day-box";

  const dateString = currentDate.toISOString().split("T")[0];
  const displayDate = currentDate.toLocaleDateString("en-GB", {

    day: "2-digit",
    month: "numeric",
    year: "numeric"
  });

  const daysRemaining = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));

  const imagePath = `images/${dateString}.png`;
  
  // box.style.backgroundImage = `url('${imagePath}')`;
  // box.style.backgroundSize = "cover";
  // box.style.backgroundPosition = "center";

  box.style.backgroundImage = `url('${imagePath}')`;
  box.style.backgroundSize = "contain";
  box.style.backgroundRepeat = "no-repeat";
  box.style.backgroundPosition = "center";

  box.style.color = "white";
  box.style.textShadow = "0 0 5px rgba(0,0,0,0.7)";

  box.innerHTML = `
    <div class="days-remaining">${daysRemaining}</div>
    <div class="date-text">${displayDate}</div>
  `;

  box.onclick = () => {
    const videoPath = `videos/${dateString}.mp4`;
    const oldMessage = document.getElementById("errorMessage");

    if (oldMessage) oldMessage.remove();
    videoElement.style.display = "block";
    videoElement.src = videoPath;
    modal.style.display = "flex";

    videoElement.onerror = () => {
      videoElement.pause();
      videoElement.style.display = "none";

      const errorMsg = document.createElement("div");
      errorMsg.id = "errorMessage";
      errorMsg.style.color = "white";
      errorMsg.style.fontSize = "1.5em";
      errorMsg.style.textAlign = "center";
      errorMsg.innerText = `I Forgot`;
      // errorMsg.innerText = `Video not found for ${displayDate}`;
      modal.appendChild(errorMsg);
    };

    videoElement.play().catch(() => {});
  };

  calendar.appendChild(box);
  currentDate.setDate(currentDate.getDate() + 1);
}

// Modal close button
closeBtn.onclick = () => {
  modal.style.display = "none";
  videoElement.pause();
  videoElement.src = "";
  videoElement.style.display = "block";
  const oldMessage = document.getElementById("errorMessage");
  if (oldMessage) oldMessage.remove();
};

// Click outside modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    videoElement.pause();
    videoElement.src = "";
    videoElement.style.display = "block";
    const oldMessage = document.getElementById("errorMessage");
    if (oldMessage) oldMessage.remove();
  }
};