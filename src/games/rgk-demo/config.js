import { config as tilemapConfig } from '../tilemaps/config'

const SPRITE_WIDTH = 64
const SPRITE_HEIGHT = 64

export const config = {
  debug: {
    fps: { show: true, frequency: 60 },
    keys: { show: true },
  },

  stage: {
    width: 800,
    height: 450,
    background: 'rgb(58, 155, 220)',
  },

  physics: {
    type: 'matter-js',
    world: { gravity: { x: 0, y: 1, scale: 0.1 } },
  },

  input: {
    allowedKeys: ['ArrowLeft', 'ArrowRight', 'ArrowUp', ' ', 'a'],
    keys: {},
  },

  scene: {
    id: 'scene',
    type: 'Node',
    children: [
      tilemapConfig.scene,
      {
        id: 'character',
        type: 'Area2D',
        children: [
          {
            id: 'body',
            type: 'Body',
            children: [
              {
                id: 'sprite',
                type: 'AnimatedSprite',
              },
            ],
          },
        ],
      },
    ],
  },

  nodes: [
    ...tilemapConfig.nodes,

    {
      id: 'character',

      status: {
        id: 'idle',
        speed: 400,
        position: { x: 0, y: 300 },
        velocity: { x: 0, y: 0 },
      },

      physics: {
        shape: 'rectangle',
        args: [0, 0, SPRITE_WIDTH, SPRITE_HEIGHT],
        inertia: 'Infinity',
      },

      sprite: {
        src: 'games/rgk-demo/character/sprite.png',
        width: SPRITE_WIDTH * 10,
        height: SPRITE_HEIGHT * 5,
        rows: 5,
        cols: 10,
        scale: 2,
        speed: 20,
        states: {
          idle: [[0, 2]],
          right: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 0],
          ],
          jumping: [[0, 0]],
          punching: [
            [0, 4],
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 4],
          ],
          leaving: [
            [0, 3],
            [1, 3],
            [2, 3],
            [3, 3],
            [4, 3],
          ],
        },
      },
    },
  ],
}
