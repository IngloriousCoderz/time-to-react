import AnimatedSprite from 'components/animated-sprite'
import { useSelector } from 'react-redux'
import { getNode } from 'store/reducers'

const states = {
  idle: [[4, 0]],
  down: [
    [1, 0],
    [0, 1],
  ],
  up: [
    [4, 4],
    [0, 5],
  ],
  rightDown: [
    [1, 2],
    [2, 2],
  ],
  rightUp: [
    [5, 3],
    [5, 4],
  ],
  right: [
    [4, 2],
    [4, 3],
  ],
}

const style = {
  position: 'absolute',
}

function Neko() {
  const { position, animation } = useSelector(getNode('neko'))

  const top = `${position.y}px`
  const left = `${position.x}px`

  return (
    <div style={{ ...style, top, left }}>
      <AnimatedSprite
        sheet="sprites/neko.png"
        width={192}
        height={192}
        rows={6}
        cols={6}
        states={states}
        state={animation.state}
        flip={animation.flip}
        repeat={true}
      />
    </div>
  )
}

export default Neko
