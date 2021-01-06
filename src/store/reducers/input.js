import { PRESS_KEYS } from 'store/actionTypes'

export default function input(state = {}, action) {
  switch (action.type) {
    case PRESS_KEYS:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
