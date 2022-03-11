var audio = new Audio();
let src = "/audio/gluhar.mp3";
let t = true;
const element = document.getElementById("button");

function playAudio() {
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}
function pauseAudio() {
    audio.pause();
}

function SwitchAudio(music_id) {
    let buf = document.getElementById("nav_link");
    buf.classList.remove("activ");
    switch (music_id) {
        case 1:
            src = "/audio/gluhar.mp3";
            document.body.style.backgroundImage = "url('/img/gluhar.jpg')";
            break;
        case 2:
            src = "/audio/seryj-prizyv.mp3";
            document.body.style.backgroundImage = "url('/img/seryj-prizyv.jpg')";
            break;
        case 3:
            src = "/audio/drozd-belobrovik.mp3";
            document.body.style.backgroundImage = "url('/img/drozd-belobrovik.jpg')";
            break;
    }
    playAudio();
    element.classList.add('pause');
    t = false;
}

function PlayPauseAudio() {
    if(t) {
        playAudio();
        t = false;
        element.classList.toggle('pause');
    }else{
        pauseAudio();
        t = true;
        element.classList.toggle('pause');
    }
}