import Node from 'components/nodes/node'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Fps from '../debug/fps'
import Keyboard from '../debug/keyboard'
import Stage from '../stage'
import World from '../world'

function Game({ game: store }) {
  const { root, scenes, debug } = store.getState()

  return (
    <Provider store={store}>
      <Stage>
        <World>
          <Node scene={scenes[root]} root={root} />
        </World>

        {debug.fps.show && <Fps />}
        {debug.keys.show && <Keyboard />}
      </Stage>
    </Provider>
  )
}

Game.propTypes = {
  game: PropTypes.object.isRequired,
}

export default Game
