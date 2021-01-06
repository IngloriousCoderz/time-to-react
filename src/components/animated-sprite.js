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
  const frames = states[state]

  const tick = useSelector(getTick)

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
      if (!repeat) {
        onAnimationEnd()
      }
    }
    setCell(frames[frame])
  }, [repeat, frames, frame, onAnimationEnd])

  return <Sprite {...rest} cell={cell} />
}

AnimatedSprite.propTypes = {
  ...Sprite.propTypes,
  states: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  ).isRequired,
  speed: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  repeat: PropTypes.bool.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
}

AnimatedSprite.defaultProps = {
  ...Sprite.defaultProps,
  states: {},
  speed: 10,
  repeat: false,
  onAnimationEnd: () => {},
}

export default AnimatedSprite
