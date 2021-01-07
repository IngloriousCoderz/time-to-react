import { keyPressed } from 'store/actions'
import { getAllowedKeys } from 'store/reducers'

let allowedKeys
let handleKeyDown, handleKeyUp

export const startListening = () => (dispatch, getState) => {
  allowedKeys = getAllowedKeys(getState())
  handleKeyDown = keyDown(dispatch)
  handleKeyUp = keyUp(dispatch)

  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
}

export const stopListening = () => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
}

const keyDown = (dispatch) => (event) => {
  if (allowedKeys.includes(event.key)) {
    event.preventDefault()
    dispatch(keyPressed({ [event.key]: true }))
  }
}

const keyUp = (dispatch) => (event) => {
  if (allowedKeys.includes(event.key)) {
    event.preventDefault()
    dispatch(keyPressed({ [event.key]: false }))
  }
}
