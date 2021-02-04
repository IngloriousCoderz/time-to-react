import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import frame from './frame'
import input, { keyPressed } from './input'
import noop from './noop'
import { createScenesReducer } from './scenes'

export const getDebug = ({ debug }) => debug
export const getStage = ({ stage }) => stage
export const getPhysics = ({ physics }) => physics
export const getFrame = ({ frame }) => frame
export const getAllowedKeys = ({ input }) => input.allowedKeys
export const getKeys = ({ input }) => input.keys
export const getScenes = ({ scenes }) => scenes
export const getScene = (node) => ({ scenes }) => scenes[node]

export function createRootReducer(reducers) {
  const scenes = createScenesReducer(reducers)
  const combinedReducer = combineReducers({
    debug: noop,
    stage: noop,
    physics: noop,
    frame,
    input,
    root: noop,
    scenes,
  })

  return createReducer(
    {},
    {
      [keyPressed]: (state, action) => {
        const newInput = input(state.input, action)
        state.input = newInput
        state.scenes = scenes(state.scenes, {
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
