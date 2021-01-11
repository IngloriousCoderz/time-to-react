import { combineReducers } from 'redux'
import { MOVE } from 'store/actionTypes'

import { createNodeReducer } from './node'

export function createNodesReducer(reducers = {}) {
  const nodesReducers = Object.keys(reducers).reduce((acc, node) => {
    const nodeReducer = reducers[node]
    acc[node] = createNodeReducer(nodeReducer)
    return acc
  }, {})

  const combinedReducer = combineReducers(nodesReducers)

  return function nodes(state = {}, action) {
    switch (action.type) {
      case MOVE:
        const { node } = action.payload
        return {
          ...state,
          [node]: nodesReducers[node](state[node], action),
        }

      default:
        return combinedReducer(state, action)
    }
  }
}
