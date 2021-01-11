import * as Types from 'store/actionTypes'

export function status(state = {}, action) {
  switch (action.type) {
    case Types.MOVE:
      const { direction } = action.payload
      return { ...state, position: direction }

    default:
      return state
  }
}
