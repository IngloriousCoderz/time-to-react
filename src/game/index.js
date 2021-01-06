import Fps from 'components/debug/fps'
import Keys from 'components/debug/keys'
import Physics from 'components/physics'
import Stage from 'components/stage'

import Neko from './neko/component'

function Game() {
  return (
    <Stage>
      <Physics>
        <Neko />
      </Physics>
      <Fps />
      <Keys />
    </Stage>
  )
}

export default Game
