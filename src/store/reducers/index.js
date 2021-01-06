import { combineReducers } from 'redux'

import { KEY_PRESSED } from '../actionTypes'
import input from './input'
import nodes from './nodes'
import stage from './stage'
import tick from './tick'

export const getStageSize = ({ stage }) => stage.size
export const getTick = ({ tick }) => tick
export const getFps = ({ tick }) => tick.fps
export const isKeyPressed = ({ input }) =>
  Object.keys(input).some((key) => input[key])
export const getNode = (key) => ({ nodes }) => nodes[key]

const combinedReducer = combineReducers({ stage, tick, input, nodes })

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case KEY_PRESSED:
      const newInput = input(state.input, action)
      const newAction = {
        ...action,
        payload: {
          input: newInput,
          delta: state.tick.delta,
          stageSize: state.stage.size,
        },
      }
      return { ...state, input: newInput, nodes: nodes(state.nodes, newAction) }

    default:
      return combinedReducer(state, action)
  }
}
