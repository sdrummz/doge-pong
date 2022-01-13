import Doge from './doge.js';
import Paddle from './paddle.js';

const doge = new Doge(document.getElementById('doge'));
const playerPaddle = new Paddle(document.getElementById('player-paddle'));
const computerPaddle = new Paddle(document.getElementById('computer-paddle'));
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');

let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    // doge.update(delta);
    computerPaddle.update(delta, doge.y);

    if (isLose()) {
      handleLose();
    }
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

function isLose() {
  const rect = doge.rect();
  return rect.right >= window.innerWidth || rect.left <= 0;
}

function handleLose() {
  const rect = doge.rect();
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1;
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1;
  }
  doge.reset();
  computerPaddle.reset();
}

document.addEventListener('mousemove', (e) => {
  playerPaddle.position = (e.y / window.innerHeight) * 100;
});

window.requestAnimationFrame(update);
