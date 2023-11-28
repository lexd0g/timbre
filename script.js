const soundButton1 = document.getElementById('soundButton1');
const soundButton2 = document.getElementById('soundButton2');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');

// Function to play audio
function playAudio(audio) {
  audio.play();
}

// Function to pause audio
function pauseAudio(audio) {
  audio.pause();
}

// Mouse events for Sound 1
soundButton1.addEventListener('mousedown', () => {
  playAudio(audio1);
  document.addEventListener('mouseup', stopAudio1);
});

function stopAudio1() {
  pauseAudio(audio1);
  document.removeEventListener('mouseup', stopAudio1);
}

// Mouse events for Sound 2
soundButton2.addEventListener('mousedown', () => {
  playAudio(audio2);
  document.addEventListener('mouseup', stopAudio2);
});

function stopAudio2() {
  pauseAudio(audio2);
  document.removeEventListener('mouseup', stopAudio2);
}

// Touch events for Sound 1
soundButton1.addEventListener('touchstart', () => {
  playAudio(audio1);
  document.addEventListener('touchend', stopAudio1);
});

// Touch events for Sound 2
soundButton2.addEventListener('touchstart', () => {
  playAudio(audio2);
  document.addEventListener('touchend', stopAudio2);
});

// Prevent default touch behavior
soundButton1.addEventListener('touchmove', function(event) {
  event.preventDefault();
});

soundButton2.addEventListener('touchmove', function(event) {
  event.preventDefault();
});
