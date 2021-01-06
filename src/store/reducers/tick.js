import { TICK } from '../actionTypes'

export default function tick(state = { delta: 0 }, action) {
  switch (action.type) {
    case TICK:
      return { ...state, delta: action.payload, fps: 1 / action.payload }

    default:
      return state
  }
}
