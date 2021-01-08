import AnimatedSprite from 'components/sprite/animated-sprite'
import { useSelector } from 'react-redux'
import { getNode } from 'store/reducers'

function Neko() {
  const { sprite, state } = useSelector(getNode('neko'))
  const { position, animation } = state

  const style = {
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
  }

  return (
    <div style={style}>
      <AnimatedSprite
        {...sprite}
        state={animation.state}
        flip={animation.flip}
        repeat={true}
      />
    </div>
  )
}

export default Neko
