import useBody from 'components/hooks/useBody'
import AnimatedSprite from 'components/sprite/animated-sprite'
import { useSelector } from 'react-redux'
import { getNode } from 'store/reducers'
import * as Vector from 'utils/vector'

import { physics, sprite } from './config.json'

const { cols, height, rows, sheet, states, width } = sprite

const style = {
  position: 'absolute',
}

function Neko() {
  const body = useBody('neko', physics)
  const { animation } = useSelector(getNode('neko'))

  const position = body ? body.position : Vector.ZERO

  const top = `${position.y}px`
  const left = `${position.x}px`

  return (
    <div style={{ ...style, top, left }}>
      <AnimatedSprite
        sheet={sheet}
        width={width}
        height={height}
        rows={rows}
        cols={cols}
        states={states}
        state={animation.state}
        flip={animation.flip}
        repeat={true}
      />
    </div>
  )
}

export default Neko
