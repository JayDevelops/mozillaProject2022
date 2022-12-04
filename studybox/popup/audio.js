const audioFile = document.getElementById("song")

let playPause = document.getElementById("playPause");
let pause = document.getElementById("pause");
let count = 0;


function playPauseMusic() {
    if(count === 0) {
        count = 1;
        audioFile.play();
        playPause.textContent = "Pause &#9208;";
    } else {
        count = 0;
        audioFile.pause();
        playPause.textContent = "Play &#9658;";
    }
    console.log("Play Pause button has been clicked");
}

function stopMusic() {
    playPauseMusic();
    console.log(count)
    audioFile.pause();
    audioFile.currentTime = 0;
    playPause.textContent = "Play &#9658;";
    console.log("Stop button clicked");
}
