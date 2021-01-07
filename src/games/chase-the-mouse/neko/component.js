import useCustomPhysics from 'components/hooks/useCustomPhysics'
import usePhysics from 'components/hooks/usePhysics'
import AnimatedSprite from 'components/sprite/animated-sprite'
import { useSelector } from 'react-redux'
import { getNode } from 'store/reducers'

function Neko() {
  useCustomPhysics('neko')
  // usePhysics('neko')
  const { sprite, state } = useSelector(getNode('neko'))

  const { sheet, width, height, rows, cols, scale, states } = sprite
  const { position, animation } = state
  const { state: animationState, flip } = animation

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
        scale={scale}
        states={states}
        state={animationState}
        flip={flip}
        repeat={true}
      />
    </div>
  )
}

export default Neko
