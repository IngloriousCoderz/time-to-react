import Scene from 'components/scene'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { MOVE, TICK } from 'store/actionTypes'
import { createRootReducer } from 'store/reducers'
import { startListening } from 'store/thunks/input'
import { startLoop } from 'store/thunks/loop'

import Fps from '../debug/fps'
import Keyboard from '../debug/keyboard'
import Stage from '../stage'
import World from '../world'

export async function createGame(name) {
  const { default: game } = await import(`../../${name}`)

  const initialState = setupState(game)
  const store = setupStore(game.reducers, initialState)

  store.dispatch(startLoop())
  store.dispatch(startListening())

  if (process.env.NODE_ENV === 'development') {
    window.store = store
  }

  function Game() {
    const { stage, scene, debug } = game.config

    return (
      <Provider store={store}>
        <Stage {...stage}>
          <World>
            <Scene scene={scene} />
          </World>

          {debug.fps.show && <Fps />}
          {debug.keys.show && <Keyboard />}
        </Stage>
      </Provider>
    )
  }

  return Game
}

function setupState({ config }) {
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

function setupStore(reducers, initialState) {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          actionsBlacklist: [TICK, MOVE],
        })
      : compose

  const rootReducer = createRootReducer(reducers)

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
