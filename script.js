const calendar = document.getElementById("calendar");
const startDate = new Date("2024-12-08");
const endDate = new Date("2025-12-06");

const modal = document.getElementById("videoModal");
const videoElement = document.getElementById("dateVideo");
const closeBtn = document.querySelector(".close");
const clickSound = document.getElementById("clickSound");
const errorSound = document.getElementById("errorSound");
const loadingOverlay = document.getElementById("loadingOverlay");

// Initialize watched days counter from localStorage
const watchedDaysKey = "watchedDays";
let watchedDays = JSON.parse(localStorage.getItem(watchedDaysKey)) || [];
const dayCountDisplay = document.getElementById("dayCount");
const inverseCountDisplay = document.getElementById("inverseCount");

dayCountDisplay.textContent = watchedDays.length;
inverseCountDisplay.textContent = 363 - watchedDays.length;

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

  box.style.backgroundImage = `url('${imagePath}')`;
  box.style.backgroundSize = "contain";
  box.style.backgroundRepeat = "no-repeat";
  box.style.backgroundPosition = "center";
  box.style.color = "white";

  box.innerHTML = `
    <div class="days-remaining">${daysRemaining}</div>
  `;

  // ⭐ Apply permanent highlight if already watched
  if (watchedDays.includes(dateString)) {
    box.classList.add("watched");
  }

  // Handle click for video + counter
  box.onclick = () => {
    const videoPath = `videos/${dateString}.mp4`;
    const oldMessage = document.getElementById("errorMessage");
    if (oldMessage) oldMessage.remove();

    loadingOverlay.style.display = "flex";

    videoElement.style.display = "block";
    videoElement.src = videoPath;

    setTimeout(() => {

      // Error if video file missing
      videoElement.onerror = () => {
        videoElement.style.display = "none";
        const errorMsg = document.createElement("div");
        errorMsg.id = "errorMessage";
        errorMsg.style.color = "white";
        errorMsg.style.fontSize = "1.5em";
        errorMsg.style.textAlign = "center";
        errorMsg.innerText = `I Forgot`;
        modal.appendChild(errorMsg);

        errorSound.currentTime = 0;
        errorSound.play().catch(() => {});
        modal.style.display = "flex";
        loadingOverlay.style.display = "none";
      };

      // Video exists + loads
      videoElement.oncanplay = () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
        modal.style.display = "flex";
        loadingOverlay.style.display = "none";

        // ⭐ Mark as watched permanently
        if (!watchedDays.includes(dateString)) {
          watchedDays.push(dateString);
          localStorage.setItem(watchedDaysKey, JSON.stringify(watchedDays));

          // Update counters
          dayCountDisplay.textContent = watchedDays.length;
          inverseCountDisplay.textContent = 363 - watchedDays.length;

          // ⭐ Highlight box
          box.classList.add("watched");
        }

        videoElement.play().catch(() => {
          loadingOverlay.style.display = "none";
        });

        videoElement.onended = () => {
          if (watchedDays.length === 363 && !localStorage.getItem(secretPlayedKey)) {
            setTimeout(() => {
              triggerEasterEgg();
            }, 500);
          }
        };
      };

      videoElement.load();

    }, 1000);
  };

  calendar.appendChild(box);
  currentDate.setDate(currentDate.getDate() + 1);
}

// Close modal on close button
closeBtn.onclick = closeModal;

// Close modal on outside click
window.onclick = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};

function closeModal() {
  modal.style.display = "none";
  videoElement.pause();
  videoElement.src = "";
  videoElement.style.display = "block";
  loadingOverlay.style.display = "none";

  videoElement.onerror = null;
  videoElement.oncanplay = null;

  const oldMessage = document.getElementById("errorMessage");
  if (oldMessage) oldMessage.remove();
}

// Easter Egg logic
const secretModal = document.getElementById("secretModal");
const secretVideo = document.getElementById("secretVideo");
const secretPlayedKey = "secretPlayed";

// Check if all videos are watched
function checkForEasterEgg() {
  if (watchedDays.length === 3 && !localStorage.getItem(secretPlayedKey)) {
    triggerEasterEgg();
  }
}

const secretButton = document.getElementById("secretButton");

function triggerEasterEgg() {
  secretButton.style.display = "block";
  closeModal();

  const secretSound = document.getElementById("secretSound");
  if (secretSound) {
    secretSound.currentTime = 0;
    secretSound.play().catch((err) => console.error("Error playing secret sound:", err));
  }
}

secretButton.onclick = () => {
  console.log("Secret button clicked!");

  secretButton.style.display = "none";

  const secretVideo = document.getElementById("secretVideo");
  const secretModal = document.getElementById("secretModal");

  if (secretVideo) {
    secretVideo.src = "videos/secret.mp4";
    secretModal.style.display = "flex";
    secretVideo.play().catch((err) => {
      console.error("Error playing secret video:", err);
      secretModal.style.display = "none";
    });
  }
};

// Close secret modal
secretModal.querySelector(".close").onclick = () => {
  secretModal.style.display = "none";
  secretVideo.pause();
  secretVideo.src = "";
};

// Close if clicking outside
window.addEventListener("click", (e) => {
  if (e.target === secretModal) {
    secretModal.style.display = "none";
    secretVideo.pause();
    secretVideo.src = "";
  }
});

// Cursor animation logic
const cursorImages = [
  'images/custom-cursor-1.png', 
  'images/custom-cursor-2.png', 
  'images/custom-cursor-3.png', 
  'images/custom-cursor-4.png', 
  'images/custom-cursor-5.png', 
  'images/custom-cursor-6.png', 
  'images/custom-cursor-7.png', 
  'images/custom-cursor-8.png', 
  'images/custom-cursor-9.png', 
  'images/custom-cursor-10.png', 
  'images/custom-cursor-11.png', 
  'images/custom-cursor-12.png', 
  'images/custom-cursor-13.png', 
  'images/custom-cursor-14.png', 
  'images/custom-cursor-15.png', 
  'images/custom-cursor-16.png', 
  'images/custom-cursor-17.png', 
  'images/custom-cursor-18.png', 
  'images/custom-cursor-19.png', 
  'images/custom-cursor-20.png'
];

let currentCursorIndex = 0;

function cycleCursor() {
  document.body.style.cursor = `url('${cursorImages[currentCursorIndex]}') 16 16, auto`;
  currentCursorIndex = (currentCursorIndex + 1) % cursorImages.length;
}

setInterval(cycleCursor, 100);