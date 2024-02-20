import anime from 'animejs';
import React from 'react';

// https://tobiasahlin.com/moving-letters/
// https://codepen.io/alexzaworski/pen/mEkvAG

export const backgroundZIndex = 1101;
export const minCoverDuration = 300;
const colors = ['#42464d', '#787878', '#d15f02', '#003c80', '#00802b', '#9c0031'];

interface AnimeBackgroundProps {
  targetRadius?: number;
  easing?: string;
  fill?: string;
  startRadius?: number;
  complete?: () => void;
  position?: {
    x: number;
    y: number;
  }
}

interface Overlay {
  init: boolean;
  cW: number;
  cH: number;
  x: number;
  y: number;
  element?: HTMLCanvasElement;
  context?: CanvasRenderingContext2D;
  circle: Circle;
  bgColor?: string;
  lastStartingPoint?: {
    x: number;
    y: number;
  }
}

interface Circle {
  draw: (targetRadius: number, startRadius: number) => void;
  x?: number;
  y?: number;
  r?: number;
  fill?: string;
}

const overlay: Overlay = {
  init: false,
  x: 0,
  y: 0,
  cH: 0,
  cW: 0,
  circle: {
    draw: (targetRadius: number, startRadius: number) => drawCircle(targetRadius, startRadius),
  },
};

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function calcPageFillRadius(x: number, y: number) {
  const l = Math.max(x, overlay.cW - x);
  const h = Math.max(y, overlay.cH - y);
  return Math.sqrt(l ** 2 + h ** 2);
}

function resizeCanvas() {
  if (overlay.element && overlay.context) {
    overlay.cW = window.innerWidth;
    overlay.cH = window.innerHeight;
    overlay.element.width = overlay.cW * window.devicePixelRatio;
    overlay.element.height = overlay.cH * window.devicePixelRatio;
    overlay.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    overlay.context.fillStyle = overlay.bgColor!;
    overlay.context.fillRect(0, 0, overlay.cW, overlay.cH);
  }
}

function drawCircle(targetRadius: number, startRadius: number) {
  if (overlay.context) {
    if (targetRadius < startRadius) {
      overlay.context.clearRect(0, 0, overlay.cW, overlay.cH);
    }

    overlay.context.beginPath();
    overlay.context
      .arc(overlay.circle.x!, overlay.circle.y!, overlay.circle.r!, 0, 2 * Math.PI, false);
    overlay.context.fillStyle = overlay.circle.fill!;
    overlay.context.fill();
    overlay.context.closePath();
  }
}

function animateFill(options: AnimeBackgroundProps) {
  overlay.bgColor = options.fill;

  overlay.circle.x = options.position?.x;
  overlay.circle.y = options.position?.y;
  overlay.circle.r = options.startRadius;
  overlay.circle.fill = options.fill;

  anime.remove(overlay.circle);

  anime({
    targets: overlay.circle,
    r: options.targetRadius,
    duration: Math.max(options.targetRadius! / 2, minCoverDuration),
    easing: options.easing,
    complete: () => {
      if (options.complete) {
        options.complete();
      }
    },
    update: () => overlay.circle.draw(options.targetRadius!, options.startRadius!),
  });
}

export const onAppInit = () => {
  const element = document.getElementById('backgroundAnimate') as HTMLCanvasElement;
  const context = element?.getContext('2d');
  if (element && context) {
    overlay.element = element;
    overlay.context = context;
    overlay.bgColor = 'transparent';
    overlay.element.style.zIndex = '-1';
    resizeCanvas();
    overlay.lastStartingPoint = { x: 0, y: 0 };
    window.addEventListener('resize', resizeCanvas);
    overlay.init = true;
  }
};

export const showOverlay = (opt: AnimeBackgroundProps) => {
  const options = opt;
  if (overlay.init) {
    if (!options.position) {
      if (overlay.x && overlay.y) {
        options.position = { x: overlay.x, y: overlay.y };
      } else {
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        options.position = { x, y };
      }
    }

    if (!options.fill) {
      options.fill = getRandomColor();
    }
    overlay.element!.style.zIndex = `${backgroundZIndex}`;
    overlay.lastStartingPoint = options.position;
    options.targetRadius = calcPageFillRadius(options.position.x, options.position.y);
    options.startRadius = 0;
    options.easing = 'easeOutQuart';

    const callback = options.complete;
    options.complete = () => {
      if (callback) callback();
    };
    animateFill(options);
  }
};

// Hide the overlay.
export const hideOverlay = (opt?: AnimeBackgroundProps) => {
  if (overlay.init) {
    const options = opt || {};

    options.targetRadius = 0;
    options.easing = 'easeInOutQuart';

    if (!options.position) {
      if (overlay.x && overlay.y) {
        options.position = { x: overlay.x, y: overlay.y };
        overlay.x = 0;
        overlay.y = 0;
      } else {
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        options.position = { x, y };
      }
    }

    options.startRadius = calcPageFillRadius(options.position.x, options.position.y);

    const callback = options.complete;
    options.complete = () => {
      overlay.element!.style.zIndex = '0';
      overlay.bgColor = 'transparent';
      if (callback) callback();
    };
    animateFill(options);
  }
};

export function clickPosition(event: React.MouseEvent) {
  if (event.clientX && event.clientY) {
    overlay.x = event.clientX;
    overlay.y = event.clientY;
    return {
      x: overlay.x,
      y: overlay.y,
    };
  }
  return undefined;
}
