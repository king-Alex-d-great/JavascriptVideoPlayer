//grab all the editables
let plasey = document.querySelector(".toggle");
let range = document.querySelectorAll("input");
let skipper = document.querySelectorAll("[data-skip]");
let progressBar = document.querySelector(".progress__filled");
 let progress = document.querySelector(".progress");
 let video =  document.querySelector(".viewer");

console.dir(video)
//adding all functions

//play and pause function
 function handlePlay(){
    if (video.paused){
       plasey.innerHTML = "⏸"  
       video.play()
        return
    }
    plasey.innerHTML = "▶"
    video.pause();
    
    //let toggle = video.paused ? "play" : "pause"
    //video[toggle]();
 }



//adding eventlisteners
plasey.addEventListener("click", handlePlay);
video.addEventListener("click", handlePlay);