import { configureStore, createSlice } from '@reduxjs/toolkit'
import Node from 'components/nodes/node'
import yaml from 'js-yaml'
import { Provider } from 'react-redux'
import { createRootReducer } from 'store'
import { tick } from 'store/frame'
import { update } from 'store/nodes'
import { startListening } from 'store/thunks/input'
import { startLoop } from 'store/thunks/loop'
import * as Vector from 'utils/vector'

import Fps from '../debug/fps'
import Keyboard from '../debug/keyboard'
import Stage from '../stage'
import World from '../world'

export async function createGame(name) {
  const game = await loadGame(name)

  const reducers = createReducers(game)

  const store = configureStore({
    reducer: createRootReducer(reducers),
    devTools: { actionsBlacklist: [tick, update] },
    preloadedState: preloadState(game),
  })

  if (process.env.NODE_ENV === 'development') {
    window.store = store
  }

  store.dispatch(startLoop())
  store.dispatch(startListening())

  function Game() {
    const { stage, scene, debug } = game

    return (
      <Provider store={store}>
        <Stage {...stage}>
          <World>
            <Node node={scene.id} scene={scene} />
          </World>

          {debug.fps.show && <Fps />}
          {debug.keys.show && <Keyboard />}
        </Stage>
      </Provider>
    )
  }

  return Game
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
    game.nodes.map((node) => {
      const { id, ...rest } = node
      const reducers = []
      Object.keys(rest).forEach((sliceName) => {
        const slice = rest[sliceName]
        if (slice.reducers) {
          // eslint-disable-next-line no-new-func
          const func = new Function('Vector', `return ${slice.reducers}`)
          const reducer = func(Vector)
          reducers.push([sliceName, reducer])
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
    nodes: game.nodes.reduce((acc, node) => {
      acc[node.id] = node
      if (node.physics && node.physics.inertia === 'Infinity') {
        node.physics.inertia = Infinity
      }
      return acc
    }, {}),
  }
}
