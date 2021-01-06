import Fps from 'components/fps'
import Stage from 'components/stage'

import Neko from './neko'

function Game() {
  return (
    <Stage>
      <Neko />
      <Fps />
    </Stage>
  )
}

export default Game
