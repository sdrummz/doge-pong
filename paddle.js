const SPEED = 0.02;

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem;
  }

  get position() {
    return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue('--position'));
  }

  set position(value) {
    this.paddleElem.style.setProperty('--position', value);
  }

  reset() {
    this.position = 50;
  }

  update(delta, dogeHeight) {
    this.position += SPEED * delta * (dogeHeight - this.position);
  }
}
