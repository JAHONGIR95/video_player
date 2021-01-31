var player = document.querySelector('.player');
var video = document.querySelector('.viewer');
var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress__filled');
var toggle = document.querySelector('.toggle');
var skipButtons = document.querySelectorAll('[data-skip]');
var ranges = document.querySelectorAll('.player__slider');
var volumeIcon = document.querySelector('#volume-icon');


window.addEventListener('load', function () {
    video.src = './images/video.mp4';
})

function togglePlay() {
    var method = video.paused ? 'play' : 'pause';
    video[method]();
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

