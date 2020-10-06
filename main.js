const speaker = new SpeechSynthesisUtterance();

function playText() {
  speaker.text = document.getElementById("text").value;
  speechSynthesis.speak(speaker);
}

function stopText() {
  speaker.stop();
}
