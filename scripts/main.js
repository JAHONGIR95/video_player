var player = document.querySelector('.player');
var video = document.querySelector('.viewer');
var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress__filled');
var toggle = document.querySelector('.toggle');
var skipButtons = document.querySelectorAll('[data-skip]');
var ranges = document.querySelectorAll('.player__slider');
var volumeIcon = document.querySelector('#volume-icon');
var soat = document.querySelector('#time');



window.addEventListener('load', function () {
    video.src = './images/video.mp4';
})

function togglePlay() {
    var method = video.paused ? 'play' : 'pause';
    video[method]();
    timeMetr(Math.round(video.duration));
    console.log(video.currentTime);
    
}

function updateButton() {
    var icon = video.paused ? "▶" : "⏯";
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function volumeIconSwitcher(volumeRate) {

    switch (true) {
        case (volumeRate >= 0.8):
            volumeIcon.setAttribute('src', './images/volume-up-interface-symbol-1.svg');
            break;
        case (volumeRate < 0.8 && volumeRate >= 0.5):
            volumeIcon.setAttribute('src', './images/volume-up-interface-symbol-2.svg');
            break;
        case (volumeRate < 0.5 && volumeRate >= 0.2):
            volumeIcon.setAttribute('src', './images/volume-up-interface-symbol-3.svg');
            break;
        case (volumeRate < 0.2):
            volumeIcon.setAttribute('src', './images/volume-up-interface-symbol-4.svg');
            break;
        default:
            volumeIcon.setAttribute('src', './images/volume-up-interface-symbol-1.svg');
    }
}

function range() {
    video[this.name] = this.value;
    volumeIconSwitcher(video.volume);
    // console.log(this.name);
}

function timeMetr(time){

    a = Math.floor(time / 3600);
    time = time % 3600;
    b = Math.floor(time / 60);
    time = time % 60;
    c = time
    
    soat.innerHTML = `<span id="a-nol">0</span> ${a} : <span id="b-nol"> 0</span> ${b} : <span id="c-nol"> 0</span> ${c}`;

    if(a >= 10){
        document.querySelector('#a-nol').style.display = 'none';
    }
    else if(a == 0){
        document.querySelector('#a-nol').textContent = 0;
    }
    if(b >= 10){
        document.querySelector('#b-nol').style.display = 'none';
    }
    else if(b == 0){
        document.querySelector('#b-nol').textContent = 0;
    }
    if(c >= 10){
        document.querySelector('#c-nol').style.display = 'none';
    }
    else if(c == 0){
        document.querySelector('#c-nol').textContent = 0;
    }
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

