import { tick } from 'store/frame'

const MILLIS_TO_SECONDS = 1000

let id = null
let lastTime = new Date()

export const startLoop = () => (dispatch) => {
  loop(dispatch)
}

export const stopLoop = () => {
  window.cancelAnimationFrame(id)
  id = null
}

function loop(dispatch) {
  const now = new Date()
  id = window.requestAnimationFrame(() => loop(dispatch))
  const delta = (now - lastTime) / MILLIS_TO_SECONDS
  lastTime = now
  dispatch(tick(delta))
}
