import AnimatedSprite from 'components/sprite/animated-sprite'

function Neko({ state, sprite }) {
  const { velocity, position } = state

  const flip = velocity.x < 0 ? 'h' : ''

  const style = {
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
  }

  return (
    <div style={style}>
      <AnimatedSprite {...sprite} state={state.id} flip={flip} />
    </div>
  )
}

export default Neko
