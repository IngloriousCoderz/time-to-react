import { createAction, createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

export const update = createAction('nodes/update')

export function createNodesReducer(reducers = {}) {
  const nodesReducers = Object.keys(reducers).reduce((acc, node) => {
    const nodeReducer = reducers[node]
    acc[node] = createNodeReducer(nodeReducer)
    return acc
  }, {})

  const combinedReducer = combineReducers(nodesReducers)

  return createReducer(
    {},
    {
      update: (state, action) => {
        const { node } = action.payload
        state[node] = nodesReducers[node](state[node], action)
      },
    },
    [],
    (state, action) => {
      Object.assign(state, combinedReducer(state, action))
    }
  )
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
