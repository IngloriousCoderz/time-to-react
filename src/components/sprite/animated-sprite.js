import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getTick } from 'store/reducers'

import Sprite from './sprite'

function AnimatedSprite({
  states,
  speed,
  state,
  repeat,
  onAnimationEnd,
  ...rest
}) {
  const tick = useSelector(getTick)

  const frames = states[state]
  const [frame, setFrame] = useState(0)
  const [cell, setCell] = useState(frames[frame])

  const counter = useRef(0)
  useEffect(() => {
    counter.current++
    if (counter.current === speed) {
      setFrame((frame) => frame + 1)
      counter.current = 0
    }
  }, [speed, tick])

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
  state: PropTypes.string.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
}

AnimatedSprite.defaultProps = {
  ...Sprite.defaultProps,
  speed: 10,
  states: {},
  onAnimationEnd: () => {},
}

export default AnimatedSprite
