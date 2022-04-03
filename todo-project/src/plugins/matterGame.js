import {
  Engine, Render, World, Bodies, Runner, MouseConstraint, Mouse, Composite,
} from 'matter-js';

const matterGame = {};
matterGame.init = false;

export function initGame() {
  if (!matterGame.init) {
    matterGame.init = true;
    matterGame.mouse = Mouse;
    matterGame.composite = Composite;
    matterGame.mouseConstraint = MouseConstraint;
    matterGame.engine = Engine.create();
    matterGame.world = matterGame.engine.world;
    matterGame.render = Render.create({
      element: document.getElementById('game-container'),
      engine: matterGame.engine,
      options: {
        width: 800,
        height: 400,
        wireframes: false,
      },
    });

    // add mouse control
    const mouse = matterGame.mouse.create(matterGame.render.canvas);
    const mouseConstraint = matterGame.mouseConstraint.create(matterGame.engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // keep the mouse in sync with rendering
    matterGame.render.mouse = mouse;

    matterGame.composite.add(matterGame.world, mouseConstraint);

    Render.run(matterGame.render);

    matterGame.runner = Runner.create();
    Runner.run(matterGame.engine);
  }

  const boxA = Bodies.rectangle(400, 200, 80, 80);
  const ballA = Bodies.circle(380, 100, 40, 10);
  const ballB = Bodies.circle(460, 10, 40, 10);
  const ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });

  matterGame.composite.add(matterGame.world, [boxA, ballA, ballB, ground]);

  World.add(matterGame.engine.world, [boxA, ballA, ballB, ground]);
}

export function gameClose() {
  if (matterGame.init) {
    matterGame.init = false;

    Runner.stop(matterGame.render);
    Runner.stop(matterGame.runner);
  }
}
