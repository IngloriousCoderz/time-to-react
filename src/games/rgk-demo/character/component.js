import AnimatedSprite from 'components/sprite/animated-sprite'

import sheet from './sprite.png'

function Character({ status, sprite }) {
  const { id, velocity, position } = status

  const flip = velocity.x < 0 ? 'h' : ''

  const style = {
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
  }

  return (
    <div style={style}>
      <AnimatedSprite {...sprite} sheet={sheet} status={id} flip={flip} />
    </div>
  )
}

export default Character
