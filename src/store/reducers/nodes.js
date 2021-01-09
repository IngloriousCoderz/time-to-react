import { combineReducers } from 'redux'

import { createNodeReducer } from './node'

export function createNodesReducer(reducers = {}) {
  const nodesReducers = Object.keys(reducers).reduce((acc, node) => {
    const nodeReducer = reducers[node]
    acc[node] = createNodeReducer(nodeReducer)
    return acc
  }, {})

  return combineReducers(nodesReducers)
}
