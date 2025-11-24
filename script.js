document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------
  //  VIDEO LINK MAP
  //  Ensure these are Google Drive preview URLs as mentioned earlier:
  //  Example: "https://drive.google.com/file/d/FILE_ID/preview"
  // ------------------------------------------------------------

  const videoLinks = {
    "2024-12-08": "https://drive.google.com/file/d/1xKKeQg69LAtsFKcZo6HMU07VCeEyoEsD/preview",
    // Add your own dates and URLs here...
  };

  // ------------------------------------------------------------
  //  HELPER: Convert Drive URL to preview URL (iframe-friendly)
  // ------------------------------------------------------------
  function convertDriveLinkToPreview(link) {
    if (!link) return null;
    const match = link.match(/\/d\/(.*?)\//);
    if (!match) return null;
    const fileID = match[1];
    return `https://drive.google.com/file/d/${fileID}/preview`; // This is the format needed for iframe
  }

  // ------------------------------------------------------------
  //  MAIN VARIABLES
  // ------------------------------------------------------------
  const calendar = document.getElementById("calendar");
  const startDate = new Date("2024-12-08");
  const endDate = new Date("2025-12-06");

  const modal = document.getElementById("videoModal");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const clickSound = document.getElementById("clickSound");
  const errorSound = document.getElementById("errorSound");

  const watchedDaysKey = "watchedDays";
  let watchedDays = JSON.parse(localStorage.getItem(watchedDaysKey)) || [];

  const dayCountDisplay = document.getElementById("dayCount");
  const inverseCountDisplay = document.getElementById("inverseCount");

  dayCountDisplay.textContent = watchedDays.length;
  inverseCountDisplay.textContent = 364 - watchedDays.length;

  // ------------------------------------------------------------
  //  BUILD CALENDAR
  // ------------------------------------------------------------
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const box = document.createElement("div");
    box.className = "day-box";

    const dateString = currentDate.toISOString().split("T")[0];

    const daysRemaining = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));
    const imagePath = `images/${dateString}.png`;

    box.style.backgroundImage = `url('${imagePath}')`;
    box.style.backgroundSize = "contain";
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";

    box.innerHTML = `<div class="days-remaining">${daysRemaining}</div>`;

    if (watchedDays.includes(dateString)) {
      box.classList.add("watched");
    }

    // ----------------------
    //  CLICK → OPEN MODAL
    // ----------------------
    box.onclick = () => {
      console.log(`Clicked on date: ${dateString}`); // Debugging: log the clicked date
      const driveLink = videoLinks[dateString];
      const previewLink = convertDriveLinkToPreview(driveLink);

      // Remove any previous error messages
      const oldMessage = document.getElementById("errorMessage");
      if (oldMessage) oldMessage.remove();

      // Hide video element if it's visible
      const videoElement = document.getElementById("dateVideo");
      if (videoElement) {
        videoElement.style.display = "none";
      }

      // No video linked for this date
      if (!previewLink) {
        console.log("No video linked for this date"); // Debugging: log if no video is linked
        const errorMsg = document.createElement("div");
        errorMsg.id = "errorMessage";
        errorMsg.style.color = "white";
        errorMsg.style.fontSize = "1.5em";
        errorMsg.style.textAlign = "center";
        errorMsg.innerText = `No video linked for this date`;
        modal.appendChild(errorMsg);
        errorSound.play().catch(() => {});
        modal.style.display = "flex";
        return;
      }

      // Create or reuse iframe for the video
      let iframe = document.getElementById("videoIframe");
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "videoIframe";
        iframe.style.width = "90%";
        iframe.style.height = "90%";
        iframe.style.border = "none";
        iframe.allow = "autoplay";
        modal.appendChild(iframe);
      }

      // Set iframe source to the video URL
      iframe.src = previewLink;
      iframe.style.display = "block"; // Show the iframe

      // Show modal and hide loader immediately
      modal.style.display = "flex";
      loadingOverlay.style.display = "none";

      // Play the click sound
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});

      // Mark the day as watched
      if (!watchedDays.includes(dateString)) {
        watchedDays.push(dateString);
        localStorage.setItem(watchedDaysKey, JSON.stringify(watchedDays));

        dayCountDisplay.textContent = watchedDays.length;
        inverseCountDisplay.textContent = 364 - watchedDays.length;
        box.classList.add("watched");
      }
    };

    calendar.appendChild(box);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // ------------------------------------------------------------
  //  CLOSE MODAL
  // ------------------------------------------------------------
  const closeBtn = modal.querySelector(".close");
  closeBtn.onclick = closeModal;

  window.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  function closeModal() {
    // Hide modal
    modal.style.display = "none";
    loadingOverlay.style.display = "none";

    // Stop the video from playing
    const iframe = document.getElementById("videoIframe");
    if (iframe) {
      // Reset the iframe source to stop the video
      iframe.src = "";
      iframe.style.display = "none"; // Hide the iframe
    }

    const secretIframe = document.getElementById("secretIframe");
    if (secretIframe) {
      // Reset the iframe source to stop the secret video
      secretIframe.src = "";
      secretIframe.style.display = "none"; // Hide the iframe
    }

    // Optionally, stop any background audio (if needed)
    const videoElement = document.getElementById("dateVideo");
    if (videoElement) {
      videoElement.pause();
      videoElement.src = "";  // Clear the source
    }

    const oldMessage = document.getElementById("errorMessage");
    if (oldMessage) oldMessage.remove();
  }

  // ------------------------------------------------------------
  //  SECRET VIDEO
  // ------------------------------------------------------------
  const secretModal = document.getElementById("secretModal");
  const secretButton = document.getElementById("secretButton");
  const secretPlayedKey = "secretPlayed";

  secretButton.onclick = () => {
    secretButton.style.display = "none";

    const secretDriveLink = "YOUR_SECRET_DRIVE_LINK_HERE";
    const secretPreviewLink = convertDriveLinkToPreview(secretDriveLink);

    // Hide old video
    const secretVideo = document.getElementById("secretVideo");
    secretVideo.style.display = "none";

    let iframe = document.getElementById("secretIframe");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "secretIframe";
      iframe.style.width = "90%";
      iframe.style.height = "90%";
      iframe.style.border = "none";
      iframe.allow = "autoplay";
      secretModal.appendChild(iframe);
    }

    iframe.src = secretPreviewLink;
    iframe.style.display = "block";
    secretModal.style.display = "flex";
  };

  secretModal.querySelector(".close").onclick = () => {
    secretModal.style.display = "none";

    // Hide iframe
    const iframe = document.getElementById("secretIframe");
    if (iframe) iframe.style.display = "none";

    const secretVideo = document.getElementById("secretVideo");
    secretVideo.pause();
    secretVideo.src = "";
  };

  // ------------------------------------------------------------
  //  CURSOR ANIMATION
  // ------------------------------------------------------------
  const cursorImages = [
    'images/custom-cursor-1.png','images/custom-cursor-2.png','images/custom-cursor-3.png',
    'images/custom-cursor-4.png','images/custom-cursor-5.png','images/custom-cursor-6.png',
    'images/custom-cursor-7.png','images/custom-cursor-8.png','images/custom-cursor-9.png',
    'images/custom-cursor-10.png','images/custom-cursor-11.png','images/custom-cursor-12.png',
    'images/custom-cursor-13.png','images/custom-cursor-14.png','images/custom-cursor-15.png',
    'images/custom-cursor-16.png','images/custom-cursor-17.png','images/custom-cursor-18.png',
    'images/custom-cursor-19.png','images/custom-cursor-20.png'
  ];

  let currentCursorIndex = 0;
  function cycleCursor() {
    document.body.style.cursor = `url('${cursorImages[currentCursorIndex]}') 16 16, auto`;
    currentCursorIndex = (currentCursorIndex + 1) % cursorImages.length;
  }
  setInterval(cycleCursor, 100);
});
