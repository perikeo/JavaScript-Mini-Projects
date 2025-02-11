const ClapButton = document.querySelector('[data-value="1"]');
const HiHatButton = document.querySelector('[data-value="2"]');
const KickButton = document.querySelector('[data-value="3"]');
const OpenHatButton = document.querySelector('[data-value="4"]');
const BassButton = document.querySelector('[data-value="5"]');
const RideButton = document.querySelector('[data-value="6"]');
const SnareButton = document.querySelector('[data-value="7"]');
const TomButton = document.querySelector('[data-value="8"]');
const TinkButton = document.querySelector('[data-value="9"]');

let buttonArray = [
  ClapButton,
  HiHatButton,
  KickButton,
  OpenHatButton,
  BassButton,
  RideButton,
  SnareButton,
  TomButton,
  TinkButton
];



function mapButtonsToSounds() {
  const buttons = document.querySelectorAll("#key_container [data-value]");
  const audios = document.querySelectorAll("#audio_container [data-value]");

  console.log("Buttons:", buttons);
  console.log("Audios:", audios);

  // Ensure audios are correctly selected and have the expected data-value
  if (buttons.length === 0 || audios.length === 0) {
    console.error('Error: No buttons or audio elements found');
    return;
  }

  // Convert NodeList to Array and Map audio elements for faster access
  const audioMap = Array.from(audios).reduce((map, audio) => {
      const dataValue = audio.getAttribute("data-value");
      console.log('audio data-value:', dataValue);  // Check data-value here
      map[dataValue] = audio; // map[key] = value;
      return map;
  }, {});

  console.log('audioMap:', audioMap);  // Log the audio map to check

  function playSound(buttonValue) {
      const audio = audioMap[buttonValue + 10]; // e.g., buttonValue=1 will look for audioMap[11]
      if (audio) audio.play();
  }

  // Map buttons and add event listeners
  buttons.forEach(button => {
      const buttonValue = parseInt(button.getAttribute("data-value"));
      button.addEventListener("click", () => playSound(buttonValue));
  });

  // Add event listener for keyboard
  document.addEventListener("keydown", (event) => {
      const key = event.key.toUpperCase();
      const button = Array.from(buttons).find(btn => btn.querySelector("kbd").textContent === key);
      if (button) {
          const buttonValue = parseInt(button.getAttribute("data-value"));
          playSound(buttonValue);
      }
  });
}

document.addEventListener("DOMContentLoaded", mapButtonsToSounds);





/* Possibilities:
  - Creating a keyMap for the keys and giving them the following values:
    A: 1
    S: 2
    D: 3
    F: 4
    G: 5
    H: 6
    J: 7
    K: 8
    L: 9



*/