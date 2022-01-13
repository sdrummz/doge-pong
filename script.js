import Doge from './doge.js';

const doge = new Doge(document.getElementById('doge'));

let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    doge.update(delta);
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
