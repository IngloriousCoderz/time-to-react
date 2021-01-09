import * as Types from 'store/actionTypes'
import * as Vector from 'utils/vector'

export default function neko(state = {}, action) {
  switch (action.type) {
    case Types.KEY_PRESSED:
      const { keys, delta } = action.payload

      const velocity = updateVelocity(keys, state.state.speed, delta)

      return {
        ...state,
        state: { ...state.state, velocity, id: updateState(velocity) },
      }

    case Types.MOVE:
      const { direction, bounds } = action.payload
      direction.x = Vector.clamp(direction.x, bounds.x, bounds.width)
      direction.y = Vector.clamp(direction.y, bounds.y, bounds.height)
      return { ...state, state: { ...state.state, position: direction } }

    default:
      return state
  }
}

function updateVelocity(keys, speed, delta) {
  let velocity = { x: 0, y: 0 }

  if (keys.ArrowRight) {
    velocity.x += 1
  }
  if (keys.ArrowLeft) {
    velocity.x -= 1
  }
  if (keys.ArrowDown) {
    velocity.y += 1
  }
  if (keys.ArrowUp) {
    velocity.y -= 1
  }
  velocity = Vector.normalize(velocity)
  velocity = Vector.mult(velocity, speed)
  velocity = Vector.mult(velocity, delta)

  return velocity
}

function updateState(velocity) {
  if (!velocity.x && !velocity.y) {
    return 'idle'
  }

  const angle = Vector.angle(velocity)

  if (Math.abs(angle) > Math.PI / 3 && Math.abs(angle) < (Math.PI * 2) / 3) {
    return angle > 0 ? 'down' : 'up'
  }

  if (
    (Math.abs(angle) >= Math.PI / 6 && Math.abs(angle) <= Math.PI / 3) ||
    (Math.abs(angle) >= (Math.PI * 2) / 3 &&
      Math.abs(angle) <= (Math.PI * 5) / 6)
  ) {
    return angle > 0 ? 'rightDown' : 'rightUp'
  }

  return 'right'
}
