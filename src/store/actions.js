import * as Types from './actionTypes'

export const tick = (delta) => ({ type: Types.TICK, payload: delta })
export const keyPressed = (keys) => ({ type: Types.KEY_PRESSED, payload: keys })
export const move = (node, direction, bounds) => ({
  type: Types.MOVE,
  payload: { direction, bounds },
})
