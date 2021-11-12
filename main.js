const speaker = new SpeechSynthesisUtterance();

// Check if browser has support
if (!speaker) {
  alert("Your browser does not support the SpeechSynthesisUtterance API");
}

//Stops speechSynthesis when user leaves page
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  speechSynthesis.cancel();
});

function playText() {
  speaker.text = document.getElementById("text").value;
  speechSynthesis.speak(speaker);
}

function stopText() {
  speechSynthesis.cancel();
  console.log(window.speechSynthesis.getVoices());
}

function handleSpeedChange() {
  let voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    speaker.voice = voices[2];
    speechSynthesis.speak(speaker);
  }
  speechSynthesis.cancel();
  let speed = document.getElementById("speed").value;
  speaker.rate = parseFloat(speed);
  speechSynthesis.speak(speaker);
}
