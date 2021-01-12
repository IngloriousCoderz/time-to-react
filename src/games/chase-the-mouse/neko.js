import { createSlice } from '@reduxjs/toolkit'
import { keyPressed } from 'store/input'
import { move } from 'store/nodes'
import * as Vector from 'utils/vector'

const statusSlice = createSlice({
  name: 'status',
  initialState: {},
  extraReducers: {
    [keyPressed]: (state, action) => {
      const { keys, delta } = action.payload

      state.velocity = updateVelocity(keys, state, delta)
      state.id = updateStatus(state)
      state.flip = updateFlip(state)
    },

    [move]: (state, action) => {
      state.position = updateDirection(action.payload)
    },
  },
})

export const status = statusSlice.reducer

function updateVelocity(keys, { speed }, delta) {
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

function updateStatus({ velocity }) {
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

function updateFlip({ velocity }) {
  return velocity.x < 0 ? 'h' : ''
}

function updateDirection({ direction, bounds }) {
  return {
    x: Vector.clamp(direction.x, bounds.x, bounds.width),
    y: Vector.clamp(direction.y, bounds.y, bounds.height),
  }
}
