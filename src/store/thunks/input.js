import { keyPressed } from 'store/actions'

let allowedKeys
let handleKeyDown, handleKeyUp

export const startListening = (keys) => (dispatch) => {
  allowedKeys = keys
  handleKeyDown = keyDown(dispatch)
  handleKeyUp = keyUp(dispatch)

  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
}

export const stopListening = () => (dispatch) => {
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
