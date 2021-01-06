import { move } from 'store/actions'
import { KEY_PRESSED } from 'store/actionTypes'
import { Keys } from 'store/thunks/input'
import * as Vector from 'utils/vector'

import position from './position'

export const initialState = {
  speed: 200,
  position: { x: 0, y: 0 },
  animation: { state: 'idle' },
}

export default function neko(state = {}, action) {
  switch (action.type) {
    case KEY_PRESSED:
      const { input, delta, stageSize } = action.payload

      const velocity = calculateVelocity(input, state.speed, delta)
      const direction = calculateDirection(state.position, velocity, stageSize)

      return {
        ...state,
        velocity,
        position: position(state.position, move(direction)),
        animation: calculateAnimation(velocity),
      }

    default:
      return state
  }
}

function calculateVelocity(input, speed, delta) {
  let velocity = { x: 0, y: 0 }

  if (input[Keys.RIGHT]) {
    velocity.x += 1
  }
  if (input[Keys.LEFT]) {
    velocity.x -= 1
  }
  if (input[Keys.DOWN]) {
    velocity.y += 1
  }
  if (input[Keys.UP]) {
    velocity.y -= 1
  }
  velocity = Vector.normalize(velocity)
  velocity = Vector.mult(velocity, speed)
  velocity = Vector.mult(velocity, delta)

  return velocity
}

function calculateDirection(position, velocity, stageSize) {
  let direction = { ...position }
  direction = Vector.sum(direction, velocity)
  direction.x = Vector.clamp(direction.x, 0, stageSize.width)
  direction.y = Vector.clamp(direction.y, 0, stageSize.height)

  return direction
}

function calculateAnimation(velocity) {
  const angle = Vector.angle(velocity)
  const animation = {}

  if (!velocity.x && !velocity.y) {
    animation.state = 'idle'
  } else if (
    Math.abs(angle) > Math.PI / 3 &&
    Math.abs(angle) < (Math.PI * 2) / 3
  ) {
    animation.state = angle > 0 ? 'down' : 'up'
  } else if (
    (Math.abs(angle) >= Math.PI / 6 && Math.abs(angle) <= Math.PI / 3) ||
    (Math.abs(angle) >= (Math.PI * 2) / 3 &&
      Math.abs(angle) <= (Math.PI * 5) / 6)
  ) {
    animation.state = angle > 0 ? 'rightDown' : 'rightUp'
  } else {
    animation.state = 'right'
  }

  if (velocity.x < 0) {
    animation.flip = 'h'
  }

  return animation
}
