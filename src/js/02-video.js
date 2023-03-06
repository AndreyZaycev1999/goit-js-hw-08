import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

let time = 0;

updateTime();

var throttled = throttle(saveTime, 1000);

player.on('timeupdate', throttled);

function saveTime() {
    time += 1;

    localStorage.setItem("videoplayer-current-time", time);

    console.log(time);
    // updateTime();
};

function updateTime() {
    const outputTime = localStorage.getItem("videoplayer-current-time");
    console.log(outputTime);

    if (outputTime) {
        time = Number(outputTime);

        player.setCurrentTime(Number(outputTime)).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
        });
        return;
    }

    
};