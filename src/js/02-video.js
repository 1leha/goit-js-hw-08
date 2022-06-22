import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');

// console.log(iframe);
// console.dir(iframe);
const options = {
  autoplay: true,
  color: 'ff0000',
  muted: true,
  //   controls: false,
};
// console.log(options);

const player = new Player(iframe, options);
console.log(player);
player.seconds = 50;

player.on('timeupdate', ({ seconds }) => {
  console.log(seconds);
});
// player.play();

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
