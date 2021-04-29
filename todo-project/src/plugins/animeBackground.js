import anime from 'animejs';

// https://tobiasahlin.com/moving-letters/
// https://codepen.io/alexzaworski/pen/mEkvAG

let colors = ['green', 'blue', 'red'];
let overlay = {};
overlay.circle = {};
overlay.open = false;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

overlay.calcPageFillRadius = function (x, y) {
  const l = Math.max(x - 0, overlay.cW - x);
  const h = Math.max(y - 0, overlay.cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
};

overlay.resizeCanvas = function () {
  overlay.cW = window.innerWidth;
  overlay.cH = window.innerHeight;
  overlay.c.width = overlay.cW * window.devicePixelRatio;
  overlay.c.height = overlay.cH * window.devicePixelRatio;
  overlay.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  overlay.ctx.fillStyle = overlay.bgColor;
  overlay.ctx.fillRect(0, 0, overlay.cW, overlay.cH);
};

overlay.circle.draw = function (options) {
  if (options.targetRadius < options.startRadius) {
    overlay.ctx.clearRect(0, 0, overlay.cW, overlay.cH);
  }

  overlay.ctx.beginPath();
  overlay.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  overlay.ctx.fillStyle = this.fill;
  overlay.ctx.fill();
  overlay.ctx.closePath();
};

overlay.animateFill = (options) => {
  const minCoverDuration = 750;
  overlay.bgColor = options.fill;

  overlay.circle.x = options.position.x;
  overlay.circle.y = options.position.y;
  overlay.circle.r = options.startRadius;
  overlay.circle.fill = options.fill;

  anime.remove(overlay.circle);

  anime({
    targets: overlay.circle,
    r: options.targetRadius,
    duration: Math.max(options.targetRadius / 2, minCoverDuration),
    easing: options.easing,
    complete: options.complete ? options.complete : null,
    update: () => overlay.circle.draw({
      startRadius: options.startRadius,
      targetRadius: options.targetRadius,
    }),
  });
};

export const onAppInit = () => {
  overlay.c = document.getElementById('backgroundAnimate');
  overlay.ctx = overlay.c.getContext('2d');
  overlay.bgColor = 'transparent';
  overlay.resizeCanvas();
  overlay.lastStartingPoint = { x: 0, y: 0 };
  window.addEventListener('resize', overlay.resizeCanvas);
};


export const show = options => {
  overlay.c.style.display = 'block';
  overlay.lastStartingPoint = options.position;

  options.targetRadius = overlay.calcPageFillRadius(options.position.x, options.position.y);
  options.startRadius = 0;
  options.easing = 'easeOutQuart';
  overlay.animateFill(options);
};

// Hide the overlay. Args:
// fill: color to animate with
// position: position to target as the circle shrinks
// complete: completion callback
export const hide = options => {
  options.targetRadius = 0;
  options.easing = 'easeInOutQuart';

  const callback = options.complete;
  options.complete = () => {
    overlay.c.style.display = 'none';
    overlay.bgColor = 'transparent';
    if (callback) callback();
  };

  options.startRadius = overlay.calcPageFillRadius(options.position.x, options.position.y);
  overlay.animateFill(options);
};

export function clickPosition(e) {
  let event = e;
  if (event.touches) {
    event = event.touches[0];
  }

  if (event.clientX && event.clientY) {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }

  // If there was no clientX and Y set, use the center position of
  // the target as a backup
  const rect = event.target.getBoundingClientRect();
  return {
    x: rect.top + (rect.bottom - rect.top) / 2,
    y: rect.left + (rect.right - rect.left) / 2,
  };
}

export const animate = (event) => {
  const position = clickPosition(event);

  if (overlay.open) {
    hide({ fill: overlay.currentColor, position });
  } else {
    overlay.currentColor = getRandomColor();
    show({ fill: overlay.currentColor, position });
  }
  overlay.open = !overlay.open;
};