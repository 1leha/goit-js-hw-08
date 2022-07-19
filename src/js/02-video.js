import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const TIME_KEY = 'videoplayer-current-time';

const player = new Player(iframe);

player.on('play', playFromPaused);
player.on('timeupdate', throttle(currentTimeToLocalStorage, 1000));

function currentTimeToLocalStorage({ seconds }) {
  localStorage.setItem(TIME_KEY, seconds);
}

function playFromPaused() {
  const stopedTime = localStorage.getItem(TIME_KEY);

  if (stopedTime) {
    player.setCurrentTime(stopedTime);
  }
}
