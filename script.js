document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const stopBtn = document.getElementById("stop-btn");

    playBtn.addEventListener("click", function () {
        audioPlayer.play();
    });

    pauseBtn.addEventListener("click", function () {
        audioPlayer.pause();
    });

    stopBtn.addEventListener("click", function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
});
