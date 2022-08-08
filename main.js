const speaker = new SpeechSynthesisUtterance();

// Check if browser has support
if (!speaker) {
  alert("Your browser does not support the SpeechSynthesisUtterance API.");
}

// Stops speechSynthesis when user leaves page
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  speechSynthesis.cancel();
});

function playText() {
  window.speechSynthesis.cancel();
  let text = document.getElementById("text").value;
  var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

function stopText() {
  speechSynthesis.cancel();
}

function handleSpeedChange() {
  let speed = document.getElementById("speed").value;
  speaker.rate = parseFloat(speed);
  speechSynthesis.speak(speaker);
}
