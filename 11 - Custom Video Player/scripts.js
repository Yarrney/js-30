// 1. Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// 2. Build functions
function togglePlay() {
  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  // The code below is the same as above but using a ternerary operator
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function spacePlay(e) {
  if ((e || window.event).keyCode === 32) {
    togglePlay();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'; // bound to video element
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip); //parseFloat() modifies string to float (number)
}

// 3. Set up event listeners
document.addEventListener('keydown', spacePlay);

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
