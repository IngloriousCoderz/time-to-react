import * as Types from 'store/actionTypes'
import * as Vector from 'utils/vector'

export function status(state = {}, action) {
  switch (action.type) {
    case Types.KEY_PRESSED:
      const { keys, delta } = action.payload

      if (keys.a) {
        return { ...state, id: 'punching' }
      }

      const force = updateForce(keys, state.speed, delta)
      const velocity = updateVelocity(keys, state.speed, delta)
      const sprite = updateSprite(velocity)

      return { ...state, force, velocity, ...sprite }

    case Types.MOVE:
      const { direction, bounds } = action.payload
      direction.x = Vector.clamp(direction.x, bounds.x, bounds.width)
      direction.y = Vector.clamp(direction.y, bounds.y, bounds.height)
      return { ...state, position: direction }

    default:
      return state
  }
}

function updateForce(keys, speed, delta) {
  if (keys.a) {
    return { x: 0, y: -0.15 }
  }

  return null
}

function updateVelocity(keys, speed, delta) {
  let velocity = { x: 0, y: 0 }

  if (keys.ArrowRight) {
    velocity.x += 1
  }
  if (keys.ArrowLeft) {
    velocity.x -= 1
  }

  velocity = Vector.normalize(velocity)
  velocity = Vector.mult(velocity, speed)
  velocity = Vector.mult(velocity, delta)

  return velocity
}

function updateSprite(velocity) {
  const id = updateStateId(velocity)
  const flip = velocity.x < 0 ? 'h' : ''

  return { id, flip }
}

function updateStateId(velocity) {
  if (!velocity.x && !velocity.y) {
    return 'idle'
  }

  if (velocity.y !== 0) {
    return 'jumping'
  }

  return 'right'
}
