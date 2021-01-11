export const config = {
  debug: {
    fps: { show: false },
    keys: { show: false },
  },

  stage: {
    width: 800,
    height: 450,
    background: 'rgb(58, 155, 220)',
  },

  physics: {
    type: 'matter-js',
    world: { x: 0, y: 1, scale: 0.1 },
  },

  input: {
    allowedKeys: [],
    keys: {},
  },

  scene: {
    id: 'level',
    type: 'Tilemap',
  },

  nodes: [
    {
      id: 'level',

      status: {
        position: { x: 0, y: 0 },
      },

      layers: [
        {
          id: 'buildings',
          position: { x: 0, y: -50 },
          src: 'games/rgk-demo/level/buildings.png',
          width: 3072,
          height: 512,
          rows: 1,
          cols: 6,
          scale: 0.78125,
          map: [[0, 1, 2, 3, 4, 5]],
        },

        {
          id: 'boardwalk',
          position: { x: 0, y: 350 },
          src: 'games/rgk-demo/level/boardwalktile.png',
          width: 128,
          height: 128,
          rows: 1,
          cols: 1,
          scale: 0.78125,
          map: [
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
          ],
        },
      ],
    },
  ],
}
