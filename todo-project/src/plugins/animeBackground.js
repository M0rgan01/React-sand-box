// https://tobiasahlin.com/moving-letters/
// https://codepen.io/alexzaworski/pen/mEkvAG
import anime from 'animejs';

let background;
let canvas;
let cH;
let cW;
let baseBgColor = 'white';
let currentColor = baseBgColor;
let animations = [];

const Circle = function (opts) {
  extend(this, opts);
};

function extend(a, b) {
  for (const key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

Circle.prototype.draw = function () {
  canvas.beginPath();
  canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  canvas.fillStyle = this.fill;
  canvas.fill();
  canvas.closePath();
  canvas.globalAlpha = 1;
};

window.onload = function () {
  background = document.getElementById('backgroundAnimate');
  canvas = background.getContext('2d');

  anime({
    duration: Infinity,
    update: function () {
      canvas.fillStyle = baseBgColor;
      canvas.fillRect(0, 0, cW, cH);
      animations.forEach(function (anim) {
        anim.animatables.forEach(function (animatable) {
          animatable.target.draw();
        });
      });
    },
  });

  resizeCanvas();
};

function removeAnimation(animation) {
  const index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  const l = Math.max(x - 0, cW - x);
  const h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}


export const resizeCanvas = () => {
  cW = window.innerWidth;
  cH = window.innerHeight;
  background.width = cW * devicePixelRatio;
  background.height = cH * devicePixelRatio;
  canvas.scale(devicePixelRatio, devicePixelRatio);
};

export const animateBack = (e, color) => {
  if (currentColor !== color ) {
    currentColor = color;
    const targetR = calcPageFillRadius(e.pageX, e.pageY);
    const minCoverDuration = 750;

    const pageFill = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: currentColor,
    });
    const fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration: Math.max(targetR / 2, minCoverDuration),
      easing: 'easeOutQuart',
      complete: function () {
        baseBgColor = pageFill.fill;
        removeAnimation(fillAnimation);
      },
    });
    animations.push(fillAnimation);
  }
};