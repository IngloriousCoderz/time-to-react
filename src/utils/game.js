import { configureStore, createSlice } from '@reduxjs/toolkit'
import yaml from 'js-yaml'
import { createRootReducer } from 'store'
import { tick } from 'store/frame'
import { animationEnd, physicsUpdate } from 'store/scenes'
import { startListening } from 'store/thunks/input'
import { startLoop } from 'store/thunks/loop'
import * as Vector from 'utils/vector'

export async function createGame(name) {
  const game = await loadGame(name)

  const reducers = createReducers(game)

  const store = configureStore({
    reducer: createRootReducer(reducers),
    devTools: { actionsBlacklist: [tick, physicsUpdate, animationEnd] },
    preloadedState: preloadState(game),
  })

  if (process.env.NODE_ENV === 'development') {
    window.store = store
  }

  store.dispatch(startLoop())
  store.dispatch(startListening())

  return store
}

async function loadGame(name) {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/${name}/config.yml`
  )
  const body = await response.text()
  return yaml.load(body)
}

function createReducers(game) {
  const nodeReducers = Object.fromEntries(
    game.scenes.map(({ id, ...rest }) => {
      const reducers = []
      Object.keys(rest).forEach((sliceName) => {
        const slice = rest[sliceName]
        if (slice.reducers) {
          // eslint-disable-next-line no-new-func
          const func = new Function('Vector', `return ${slice.reducers}`)
          const reducer = func(Vector)
          reducers.push([sliceName, reducer])
          delete slice.reducers
        }
      })
      return [id, Object.fromEntries(reducers)]
    })
  )

  return Object.keys(nodeReducers).reduce((acc, nodeName) => {
    const sliceReducers = nodeReducers[nodeName]
    acc[nodeName] = Object.keys(sliceReducers).reduce((acc, sliceName) => {
      const sliceReducer = sliceReducers[sliceName]
      acc[sliceName] = createSlice({
        name: sliceName,
        initialState: {},
        extraReducers: sliceReducer,
      }).reducer
      return acc
    }, {})
    return acc
  }, {})
}

function preloadState(game) {
  return {
    ...game,
    scenes: game.scenes.reduce((acc, scene) => {
      acc[scene.id] = scene
      if (scene.physics && scene.physics.inertia === 'Infinity') {
        scene.physics.inertia = Infinity
      }
      return acc
    }, {}),
  }
}
