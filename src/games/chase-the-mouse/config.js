const STAGE_WIDTH = 800
const STAGE_HEIGHT = 450

const NEKO_WIDTH = 32
const NEKO_HEIGHT = 32

export const config = {
  debug: {
    fps: { show: true, frequency: 60 },
    keys: { show: true },
  },

  stage: {
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    background:
      'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
  },

  physics: {
    type: 'simple',
    world: {
      gravity: { x: 0, y: 0, scale: 0.1 },
    },
  },

  input: {
    allowedKeys: ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'],
    keys: {},
  },

  // layout: {
  //   id: 'neko',
  //   children: [],
  // },

  nodes: [
    {
      id: 'neko',
      type: 'Neko',

      status: {
        id: 'idle',
        speed: 400,
        position: {
          x: STAGE_WIDTH / 2 - NEKO_WIDTH / 2,
          y: STAGE_HEIGHT / 2 - NEKO_HEIGHT / 2,
        },
        velocity: { x: 0, y: 0 },
      },

      physics: {
        shape: 'circle',
        args: [0, 0, NEKO_WIDTH / 2],
      },

      sprite: {
        width: NEKO_WIDTH * 6,
        height: NEKO_HEIGHT * 6,
        rows: 6,
        cols: 6,
        scale: 2,
        speed: 20,
        states: {
          idle: [[4, 0]],
          down: [
            [1, 0],
            [0, 1],
          ],
          up: [
            [4, 4],
            [0, 5],
          ],
          rightDown: [
            [1, 2],
            [2, 2],
          ],
          rightUp: [
            [5, 3],
            [5, 4],
          ],
          right: [
            [4, 2],
            [4, 3],
          ],
        },
      },
    },
  ],
}
