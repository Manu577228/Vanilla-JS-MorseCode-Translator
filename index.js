// Define Morse code mappings
const morseCodeMap = {
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
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": "/",
};

// reverse the Morse code mappings for translation from morse to text
const reverseMorseCodeMap = Object.fromEntries(
  Object.entries(morseCodeMap).map(([key, value]) => [value, key])
);

// Function to translate text to Morse Code
function translateToMorse() {
  const inputText = document.getElementById("text").value.toUpperCase();
  let morseCode = "";
  for (let i = 0; i < inputText.length; i++) {
    if (morseCodeMap.hasOwnProperty(inputText[i])) {
      morseCode += morseCodeMap[inputText[i]] + " ";
    } else {
      morseCode += "/";
    }
  }
  document.getElementById("result").value = morseCode.trim();
}

// function to translate Morse code to text
function translateToText() {
  const inputMorse = document.getElementById("text").value.split(" ");
  let translateText = "";
  for (let i = 0; i < inputMorse.length; i++) {
    if (reverseMorseCodeMap.hasOwnProperty(inputMorse[i])) {
      translateText += reverseMorseCodeMap[inputMorse[i]];
    } else {
      translateText += " ";
    }
  }
  // set the result textarea value to the translated text
  document.getElementById("result").value = translateText;
}
