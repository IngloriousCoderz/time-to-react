import Body from 'components/body'
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
const { store, nodes } = setup(game)

function Game() {
  const { stage, physics, debug } = game.config

  return (
    <Provider store={store}>
      <Stage {...stage}>
        {physics.type === 'matter-js' ? <World>{nodes}</World> : nodes}
        {debug.showFps && <Fps />}
        {debug.showKeys && <Keys />}
      </Stage>
    </Provider>
  )
}

export default Game

export function setup(game) {
  const initialState = setupState(game)
  const store = setupStore(game, initialState)
  const nodes = setupNodes(game)

  store.dispatch(startLoop())
  store.dispatch(startListening())

  return { store, nodes }
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

function setupStore({ reducers }, initialState) {
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

function setupNodes({ config, components }) {
  const { physics, nodes } = config

  return nodes.map((node) => {
    const Node = components[node.id]
    if (physics.type === 'matter-js') {
      return (
        <Body key={node.id} node={node.id}>
          <Node {...node} />
        </Body>
      )
    }
    return <Node key={node.id} {...node} />
  })
}
