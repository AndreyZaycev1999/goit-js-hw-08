import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

updateTime();

var throttled = throttle(saveTime, 1000);

player.on('timeupdate', throttled);

function saveTime(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
};

function updateTime() {
    const outputTime = localStorage.getItem("videoplayer-current-time");

    if (outputTime) {
        player.setCurrentTime(outputTime);
    };
};