import { KEY_PRESSED, MOVE } from 'store/actionTypes'

export function createNodesReducer(nodeReducers) {
  return function nodes(state = {}, action) {
    switch (action.type) {
      case KEY_PRESSED:
      case MOVE:
        return Object.keys(state).reduce((acc, key) => {
          acc[key] = nodeReducers[key](state[key], action)
          return acc
        }, {})

      default:
        return state
    }
  }
}
