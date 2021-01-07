import neko from 'games/chase-the-mouse/neko/reducer'
import { KEY_PRESSED, MOVE } from 'store/actionTypes'

export default function nodes(state = {}, action) {
  switch (action.type) {
    case KEY_PRESSED:
    case MOVE:
      return Object.keys(state).reduce((acc, key) => {
        // TODO: apply reducers dynamically
        acc[key] = neko(state[key], action)
        return acc
      }, {})

    default:
      return state
  }
}
