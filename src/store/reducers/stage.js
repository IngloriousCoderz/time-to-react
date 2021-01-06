import { SET_STAGE_SIZE } from '../actionTypes'

export default function stage(state = { size: {} }, action) {
  switch (action.type) {
    case SET_STAGE_SIZE:
      return { ...state, size: action.payload }

    default:
      return state
  }
}
