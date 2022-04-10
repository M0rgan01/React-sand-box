import {
  Bodies, Composite, Engine, Mouse, MouseConstraint, Render, Runner, World,
} from 'matter-js';

interface MatterGame {
  init: boolean;
  mouse?: Mouse;
  composite?: Composite;
  mouseConstraint?: MouseConstraint;
  engine?: Engine;
  world?: World;
  render?: Render;
  runner?: Runner;
}

const matterGame: MatterGame = {
  init: false,
};

export function initGame() {
  const element = document.getElementById('game-container');
  if (!matterGame.init && element) {
    matterGame.init = true;
    matterGame.mouse = new Mouse();
    matterGame.composite = new Composite();
    matterGame.mouseConstraint = new MouseConstraint();
    matterGame.engine = Engine.create();
    matterGame.world = matterGame.engine.world;
    matterGame.render = Render.create({
      element,
      engine: matterGame.engine,
      options: {
        width: 800,
        height: 400,
        wireframes: false,
      },
    });

    // add mouse control
    const mouse = Mouse.create(matterGame.render.canvas);
    const mouseConstraint = MouseConstraint.create(matterGame.engine, { mouse });

    // keep the mouse in sync with rendering
    matterGame.render.mouse = mouse;

    matterGame.composite = Composite.add(matterGame.world, mouseConstraint);
    Render.run(matterGame.render);

    matterGame.runner = Runner.create();
    Runner.run(matterGame.engine);
  }

  const boxA = Bodies.rectangle(400, 200, 80, 80);
  const ballA = Bodies.circle(380, 100, 40);
  const ballB = Bodies.circle(460, 10, 40);
  const ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });

  matterGame.composite = Composite.add(matterGame.world!, [boxA, ballA, ballB, ground]);

  World.add(matterGame.engine!.world, [boxA, ballA, ballB, ground]);
}

export function gameClose() {
  if (matterGame.init) {
    matterGame.init = false;

    Runner.stop(matterGame.runner!);
  }
}
