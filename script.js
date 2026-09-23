// ==========================================
// IMAGE SWITCHING
// ==========================================

const imageElement = document.getElementById("switchingImage");

const images = [
  "images/Image1.jpeg",
  "images/Image2.jpeg"
];

let currentImage = 0;

// Preload images
images.forEach(function (src) {
  const img = new Image();
  img.src = src;
});

// Switch images every 0.5 seconds
setInterval(function () {
  currentImage = currentImage === 0 ? 1 : 0;
  imageElement.src = images[currentImage];
}, 500);


// ==========================================
// TITLE
// ==========================================

const titleText = "CRATE DAY 2026";
const titleElement = document.getElementById("animatedTitle");

const letters = [];

titleText.split("").forEach(function (character) {

  const span = document.createElement("span");

  if (character === " ") {

    span.innerHTML = "&nbsp;";
    span.classList.add("space");

  } else {

    span.textContent = character;
    letters.push(span);

  }

  titleElement.appendChild(span);
});


// ==========================================
// MORSE CODE TABLE
// ==========================================

const morseCode = {

  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----."
};


// ==========================================
// SECRET MESSAGE
// ==========================================

// CHANGE YOUR MESSAGE HERE

const secretMessage = "MADE YOU LOOK";


// ==========================================
// CREATE MORSE COLOUR SEQUENCE
// ==========================================

function createColourSequence(text) {

  const colours = [];

  const words = text
    .toUpperCase()
    .trim()
    .split(/\s+/);


  words.forEach(function (word, wordIndex) {

    const characters = word.split("");


    characters.forEach(function (character, characterIndex) {

      const code = morseCode[character];

      if (!code) {
        return;
      }


      // Convert dots/dashes into colours
      code.split("").forEach(function (symbol) {

        // DOT = RED
        if (symbol === ".") {
          colours.push("#CD171E");
        }

        // DASH = YELLOW
        if (symbol === "-") {
          colours.push("#FFD700");
        }

      });


      // WHITE between Morse letters
      if (characterIndex < characters.length - 1) {
        colours.push("white");
      }

    });


    // Extra white between actual words
    if (wordIndex < words.length - 1) {
      colours.push("white");
      colours.push("white");
      colours.push("white");
    }

  });


  // WHITE between end and beginning when looping
  colours.push("white");


  return colours;
}


const colourSequence = createColourSequence(secretMessage);


// ==========================================
// MOVING MORSE DISPLAY
// ==========================================

// This stores what colour is currently
// sitting on each title character.

const displayColours =
  new Array(letters.length).fill("white");


let morsePosition = 0;


// Lower = faster
const animationSpeed = 500;


// ==========================================
// ANIMATION
// ==========================================

setInterval(function () {


  // ----------------------------------------
  // SHIFT EVERYTHING ONE PLACE RIGHT
  // ----------------------------------------

  for (let i = displayColours.length - 1; i > 0; i--) {

    displayColours[i] =
      displayColours[i - 1];

  }


  // ----------------------------------------
  // ADD NEXT MORSE COLOUR ON LEFT
  // ----------------------------------------

  displayColours[0] =
    colourSequence[morsePosition];


  // ----------------------------------------
  // APPLY COLOURS TO TITLE
  // ----------------------------------------

  for (let i = 0; i < letters.length; i++) {

    letters[i].style.color =
      displayColours[i];

  }


  // ----------------------------------------
  // NEXT MORSE SYMBOL
  // ----------------------------------------

  morsePosition++;


  // ----------------------------------------
  // LOOP SECRET MESSAGE
  // ----------------------------------------

  if (morsePosition >= colourSequence.length) {

    morsePosition = 0;

  }


}, animationSpeed);
