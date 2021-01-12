import { configureStore, createSlice } from '@reduxjs/toolkit'
import Node from 'components/nodes/node'
import { Provider } from 'react-redux'
import { createRootReducer } from 'store'
import { tick } from 'store/frame'
import { move } from 'store/nodes'
import { startListening } from 'store/thunks/input'
import { startLoop } from 'store/thunks/loop'

import Fps from '../debug/fps'
import Keyboard from '../debug/keyboard'
import Stage from '../stage'
import World from '../world'

export async function createGame(name) {
  const { default: game } = await import(`../../games/${name}`)

  // game.reducers = createReducers(game.reducers)

  const store = configureStore({
    reducer: createRootReducer(game.reducers),
    devTools: { actionsBlacklist: [tick, move] },
    preloadedState: preloadState(game),
  })

  if (process.env.NODE_ENV === 'development') {
    window.store = store
  }

  store.dispatch(startLoop())
  store.dispatch(startListening())

  function Game() {
    const { stage, scene, debug } = game.config

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

// function createReducers(nodeReducers) {
//   return Object.keys(nodeReducers).reduce((acc, nodeName) => {
//     const sliceReducers = nodeReducers[nodeName]
//     acc[nodeName] = Object.keys(sliceReducers).reduce((acc, sliceName) => {
//       const sliceReducer = sliceReducers[sliceName]
//       acc[sliceName] = createSlice({
//         name: sliceName,
//         initialState: {},
//         extraReducers: sliceReducer,
//       })
//       return acc
//     }, {})
//     return acc
//   }, {})
// }

function preloadState({ config }) {
  return {
    ...config,
    nodes: config.nodes.reduce((acc, node) => {
      acc[node.id] = node
      if (node.physics && node.physics.inertia === 'Infinity') {
        node.physics.inertia = Infinity
      }
      return acc
    }, {}),
  }
}
