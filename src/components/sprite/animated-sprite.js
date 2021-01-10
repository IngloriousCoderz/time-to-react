import { useCounter } from 'components/hooks/useCounter'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import Sprite from './sprite'

function AnimatedSprite({
  states,
  speed,
  status,
  repeat,
  onAnimationEnd,
  ...rest
}) {
  const frames = states[status]
  const [frame, setFrame] = useState(0)
  const updateFrame = () => setFrame((frame) => frame + 1)
  useCounter(speed, updateFrame, 0)

  const [cell, setCell] = useState(frames[frame])
  useEffect(() => {
    if (frame === frames.length) {
      setFrame(0)
      onAnimationEnd()
    }
    setCell(frames[frame])
  }, [frame, frames, onAnimationEnd])

  return <Sprite {...rest} cell={cell} />
}

AnimatedSprite.propTypes = {
  ...Sprite.propTypes,
  speed: PropTypes.number.isRequired,
  states: PropTypes.shape({
    frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    next: PropTypes.string,
  }).isRequired,
  status: PropTypes.string.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
}

AnimatedSprite.defaultProps = {
  ...Sprite.defaultProps,
  speed: 10,
  states: {},
  onAnimationEnd: () => {},
}

export default AnimatedSprite
