import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import debug from './debug'
import frame from './frame'
import input, { keyPressed } from './input'
import { createNodesReducer } from './nodes'
import physics from './physics'
import scene from './scene'
import stage from './stage'

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
    debug,
    stage,
    physics,
    frame,
    input,
    scene,
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
