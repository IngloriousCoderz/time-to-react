import { TICK } from '../actionTypes'

export default function tick(state = {}, action) {
  switch (action.type) {
    case TICK:
      return { ...state, delta: action.payload, fps: 1 / action.payload }

    default:
      return state
  }
}
