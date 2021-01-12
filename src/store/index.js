import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import frame from './frame'
import input, { keyPressed } from './input'
import { createNodesReducer } from './nodes'
import noop from './noop'

export const getDebug = ({ debug }) => debug
export const getStage = ({ stage }) => stage
export const getPhysics = ({ physics }) => physics
export const getFrame = ({ frame }) => frame
export const getAllowedKeys = ({ input }) => input.allowedKeys
export const getKeys = ({ input }) => input.keys
export const getNode = (node) => ({ nodes }) => nodes[node]

export function createRootReducer(reducers) {
  const nodes = createNodesReducer(reducers)
  const combinedReducer = combineReducers({
    debug: noop,
    stage: noop,
    physics: noop,
    frame,
    input,
    scene: noop,
    nodes,
  })

  return createReducer(
    {},
    {
      [keyPressed]: (state, action) => {
        const newInput = input(state.input, action)
        state.input = newInput
        state.nodes = nodes(state.nodes, {
          type: action.type,
          payload: { keys: state.input.keys, delta: state.frame.delta },
        })
      },
    },
    [],
    (state, action) => {
      Object.assign(state, combinedReducer(state, action))
    }
  )
}
