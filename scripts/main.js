var player = document.querySelector('.player');
var video = document.querySelector('.viewer');
var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress__filled');
var toggle = document.querySelector('.toggle');
var skipButtons = document.querySelectorAll('[data-skip]');
var ranges = document.querySelectorAll('.player__slider');


window.addEventListener('load', function(){
    video.src = './images/video.mp4';
})

function togglePlay(){
    var method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(){
    var icon = video.paused ? "▶" : "⏯";
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function range(){
    video[this.name] = this.value;
    // console.log(this.value);
    // console.log(this.name);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(item => {
    item.addEventListener('click', skip)
})

ranges.forEach(item => {
    item.addEventListener('change', range);
})

ranges.forEach(item => {
    item.addEventListener('mouseover', range);
})

