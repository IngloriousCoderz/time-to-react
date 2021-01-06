import Fps from 'components/fps'
import Keys from 'components/keys'
import Stage from 'components/stage'

import Neko from './neko/component'

function Game() {
  return (
    <Stage>
      <Neko />
      <Fps />
      <Keys />
    </Stage>
  )
}

export default Game
