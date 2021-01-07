import useCustomPhysics from 'components/hooks/useCustomPhysics'
// import usePhyisics from 'components/hooks/usePhysics'
import AnimatedSprite from 'components/sprite/animated-sprite'
import { useSelector } from 'react-redux'
import { getNode } from 'store/reducers'
import * as Vector from 'utils/vector'

import { /*physics, */ sprite } from './config.json'

const { cols, height, rows, sheet, states, width } = sprite

function Neko() {
  // const body = usePhyisics('neko', physics)
  const body = useCustomPhysics('neko')
  const { animation } = useSelector(getNode('neko'))

  const position = body ? body.position : Vector.ZERO

  const style = {
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
  }

  return (
    <div style={style}>
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
