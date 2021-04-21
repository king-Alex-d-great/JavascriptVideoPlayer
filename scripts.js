//grab all the editables
let plasey = document.querySelector(".toggle");
let range = document.querySelectorAll("input");
let skipper = document.querySelectorAll("[data-skip]");
let progressBar = document.querySelector(".progress__filled");
let progress = document.querySelector(".progress");
let video = document.querySelector(".viewer");
let fullScreen = document.querySelector(".full-screen");
let player = document.querySelector(".player");

console.dir(video);
//adding all functions

//play and pause function
function handlePlay() {
  if (video.paused) {
    plasey.innerHTML = "⏸";
    video.play();
    return;
  }
  plasey.innerHTML = "▶";
  video.pause();

  //(video.paused) ? plasey.innerHTML = "⏸" && video.play() :  plasey.innerHTML = "▶" && video.pause();
//or
  //let toggle = video.paused ? "play" : "pause"
  //video[toggle]();
}

//volume and speed function
function handleSliders() {
  video[this.name] = this.value;
}

//skipping functions
function handleSkipper() {
  video.currentTime += +this.dataset.skip;
}

//make full screen
function handleScreen() {
  player.width === window.innerWidth
    ? player.classList.toggle("screen")
    : (player.width = window.innerWidth);
}

//adding eventlisteners
plasey.addEventListener("click", handlePlay);
video.addEventListener("click", handlePlay);
range.forEach((range) => range.addEventListener("change", handleSliders));
skipper.forEach((skip) => skip.addEventListener("click", handleSkipper));
fullScreen.addEventListener("click", handleScreen);
