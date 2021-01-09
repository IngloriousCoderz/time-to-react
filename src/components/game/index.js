import Body from 'components/body'
import Node from 'components/node'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { MOVE, TICK } from 'store/actionTypes'
import { createRootReducer } from 'store/reducers'
import { startListening } from 'store/thunks/input'
import { startLoop } from 'store/thunks/loop'

import Fps from '../debug/fps'
import Keys from '../debug/keys'
import Stage from '../stage'
import World from '../world'

const { default: game } = require('games/chase-the-mouse')

const initialState = setupState(game)
const store = setupStore(game.reducers, initialState)

store.dispatch(startLoop())
store.dispatch(startListening())

function Game() {
  const { stage, nodes, debug } = game.config

  return (
    <Provider store={store}>
      <Stage {...stage}>
        <World>
          {nodes.map((node) => (
            <Body key={node.id} node={node.id}>
              <Node {...node} component={game.components[node.id]} />
            </Body>
          ))}
        </World>
        {debug.showFps && <Fps />}
        {debug.showKeys && <Keys />}
      </Stage>
    </Provider>
  )
}

export default Game

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
