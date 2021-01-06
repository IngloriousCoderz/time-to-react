import { PRESS_KEYS, TICK } from './actionTypes'

export const tick = (delta) => ({ type: TICK, payload: delta })
export const pressKeys = (keys) => ({ type: PRESS_KEYS, payload: keys })
