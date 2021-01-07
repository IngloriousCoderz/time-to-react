import { combineReducers } from 'redux'

import { KEY_PRESSED } from '../actionTypes'
import debug from './debug'
import input from './input'
import nodes from './nodes'
import physics from './physics'
import stage from './stage'
import tick from './tick'

export const getStage = ({ stage }) => stage
export const getPhysics = ({ physics }) => physics
export const getTick = ({ tick }) => tick
export const getAllowedKeys = ({ input }) => input.allowedKeys
export const getKeys = ({ input }) => input.keys
export const getNode = (node) => ({ nodes }) => nodes[node]

const combinedReducer = combineReducers({
  debug,
  stage,
  physics,
  tick,
  input,
  nodes,
})

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case KEY_PRESSED:
      const newInput = input(state.input, action)
      const newAction = {
        ...action,
        payload: {
          keys: newInput.keys,
          delta: state.tick.delta,
        },
      }
      return { ...state, input: newInput, nodes: nodes(state.nodes, newAction) }

    default:
      return combinedReducer(state, action)
  }
}
