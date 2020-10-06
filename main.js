const speaker = new SpeechSynthesisUtterance();

function playText() {
  speaker.text = document.getElementById("text").value;
  speechSynthesis.speak(speaker);
}

function stopText() {
  speaker.stop();
}

function handleSpeedChange() {
  let speed = document.getElementById("speed").value;
  speaker.rate = parseFloat(speed);
}
