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

      state.force = updateForce(keys, state, delta)
      state.velocity = updateVelocity(keys, state, delta)
      state.id = updateStatus(keys, state)
      state.flip = updateFlip(state)
    },

    [move]: (state, action) => {
      state.position = updateDirection(action.payload)
    },
  },
})

export const status = statusSlice.reducer

function updateForce(keys, { speed }, delta) {
  if (keys.a) {
    return { x: 0, y: -0.15 }
  }

  return null
}

function updateVelocity(keys, { speed }, delta) {
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

function updateStatus(keys, { velocity }) {
  if (keys.a) {
    return 'punching'
  }

  if (!velocity.x && !velocity.y) {
    return 'idle'
  }

  if (velocity.y !== 0) {
    return 'jumping'
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
