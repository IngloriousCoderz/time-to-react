import { TICK } from './actionTypes'

export const tick = (delta) => ({ type: TICK, payload: delta })
