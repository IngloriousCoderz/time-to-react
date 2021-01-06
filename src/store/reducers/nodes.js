import { KEY_PRESSED } from 'store/actionTypes'

import neko, { initialState } from './neko'

export default function nodes(state = { neko: initialState }, action) {
  switch (action.type) {
    case KEY_PRESSED:
      return { ...state, neko: neko(state.neko, action) }

    default:
      return state
  }
}
