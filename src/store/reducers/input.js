import { KEY_PRESSED } from 'store/actionTypes'

export default function input(state = {}, action) {
  switch (action.type) {
    case KEY_PRESSED:
      return { ...state, keys: { ...state.keys, ...action.payload } }

    default:
      return state
  }
}
