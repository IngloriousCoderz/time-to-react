import { TICK } from '../actionTypes'

export default function tick(state = 0, action) {
  switch (action.type) {
    case TICK:
      return action.payload

    default:
      return state
  }
}
