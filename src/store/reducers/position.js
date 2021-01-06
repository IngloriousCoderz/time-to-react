import { MOVE } from '../actionTypes'

export default function position(state = { x: 0, y: 0 }, action) {
  switch (action.type) {
    case MOVE:
      return action.payload

    default:
      return state
  }
}
