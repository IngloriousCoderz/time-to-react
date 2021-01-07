import Neko from 'games/chase-the-mouse/neko/component'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { MOVE, TICK } from 'store/actionTypes'
import rootReducer from 'store/reducers'
import { startListening } from 'store/thunks/input'
import { startLoop } from 'store/thunks/loop'
import { startPhysics } from 'store/thunks/physics'

import Fps from '../debug/fps'
import Keys from '../debug/keys'
import Stage from '../stage'
import World from '../world'

const config = require('games/chase-the-mouse/config.json')
const { debug, physics, stage, input, nodes } = config
const initialState = {
  ...config,
  input: { ...input, keys: {} },
  nodes: config.nodes.reduce((acc, node) => {
    acc[node.id] = node
    if (node.physics && node.physics.inertia === 'Infinity') {
      node.physics.inertia = Infinity
    }
    return acc
  }, {}),
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: [TICK, MOVE],
      })
    : compose

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

store.dispatch(startLoop())
if (physics) {
  startPhysics({ stage, physics })
}
store.dispatch(startListening())

const availableNodes = { Neko }

function Game() {
  const { showFps, showKeys } = debug
  const nodeComponents = nodes.map((node) => {
    const Node = availableNodes[node.type]
    return <Node key={node.id} {...node} />
  })

  return (
    <Provider store={store}>
      <Stage {...stage}>
        {physics ? <World>{nodeComponents}</World> : nodeComponents}
        {showFps && <Fps />}
        {showKeys && <Keys />}
      </Stage>
    </Provider>
  )
}

export default Game
