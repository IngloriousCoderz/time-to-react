import { pressKeys } from 'store/actions'

export const Keys = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SPACE: 32,
}

let allowedKeys
let keyDown, keyUp

export const startListening = (keys) => (dispatch) => {
  allowedKeys = keys
  keyDown = handleKeyDown(dispatch)
  keyUp = handleKeyUp(dispatch)

  window.addEventListener('keydown', keyDown)
  window.addEventListener('keyup', keyUp)
}

export const stopListening = () => (dispatch) => {
  window.removeEventListener('keydown', keyDown)
  window.removeEventListener('keyup', keyUp)
}

const handleKeyDown = (dispatch) => (event) => {
  if (allowedKeys.includes(event.keyCode)) {
    event.preventDefault()
    dispatch(pressKeys({ [event.keyCode]: true }))
  }
}

const handleKeyUp = (dispatch) => (event) => {
  if (allowedKeys.includes(event.keyCode)) {
    event.preventDefault()
    dispatch(pressKeys({ [event.keyCode]: false }))
  }
}
