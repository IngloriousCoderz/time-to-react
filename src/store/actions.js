import * as Types from './actionTypes'

export const setStageSize = (size) => ({
  type: Types.SET_STAGE_SIZE,
  payload: size,
})
export const tick = (delta) => ({ type: Types.TICK, payload: delta })
export const keyPressed = (keys) => ({ type: Types.KEY_PRESSED, payload: keys })
export const move = (direction) => ({ type: Types.MOVE, payload: direction })
