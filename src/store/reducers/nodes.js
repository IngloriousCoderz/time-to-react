import { state as initialState } from 'game/neko/config.json'
import neko from 'game/neko/reducer'
import { KEY_PRESSED } from 'store/actionTypes'

export default function nodes(state = { neko: initialState }, action) {
  switch (action.type) {
    case KEY_PRESSED:
      return { ...state, neko: neko(state.neko, action) }

    default:
      return state
  }
}
