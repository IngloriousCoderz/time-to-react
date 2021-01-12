import { createAction } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

export const move = createAction('nodes/move')

export function createNodesReducer(reducers = {}) {
  const nodesReducers = Object.keys(reducers).reduce((acc, node) => {
    const nodeReducer = reducers[node]
    acc[node] = createNodeReducer(nodeReducer)
    return acc
  }, {})

  const combinedReducer = combineReducers(nodesReducers)

  return function nodes(state = {}, action) {
    switch (action.type) {
      case move.type:
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

function createNodeReducer(reducers) {
  return function node(state = {}, action) {
    return Object.keys(reducers).reduce(
      (acc, sub) => {
        const subReducer = reducers[sub]
        const subState = state[sub]
        acc[sub] = subReducer(subState, action)
        return acc
      },
      { ...state }
    )
  }
}
