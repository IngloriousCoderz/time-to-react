import AnimatedSprite from 'components/sprite/animated-sprite'

function Neko({ status, sprite }) {
  const { velocity, position } = status

  const flip = velocity.x < 0 ? 'h' : ''

  const style = {
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
  }

  return (
    <div style={style}>
      <AnimatedSprite {...sprite} status={status.id} flip={flip} />
    </div>
  )
}

export default Neko
