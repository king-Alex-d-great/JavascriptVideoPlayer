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

//handle progress
function handleProgess() {
  let movement = (this.currentTime / this.duration) * 100;
  progressBar.style.flexBasis = `${movement}%`;
}

//move progress with mouse scrub
function moveVideo(e) {
  let movement = (e.offsetX / this.offsetWidth) * +video.duration;
  video.currentTime = movement;
}

//ADDING EVENTLISTENERS
let down = false;
plasey.addEventListener("click", handlePlay);

video.addEventListener("click", handlePlay);
video.addEventListener("timeupdate", handleProgess);

fullScreen.addEventListener("click", handleScreen);
range.forEach((range) => range.addEventListener("change", handleSliders));
skipper.forEach((skip) => skip.addEventListener("click", handleSkipper));

progress.addEventListener("click", moveVideo);
progress.addEventListener("mousemove", (e) => down ? moveVideo(e) : (down = false));
progress.addEventListener("mousedown", () => (down = true));
progress.addEventListener("mouseup", () => (down = false));
progress.addEventListener("mouseout", () => (down = false));
