// 1. Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

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
};

// 3. Set up event listeners
