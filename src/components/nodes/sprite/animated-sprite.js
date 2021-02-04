import { useCounter } from 'components/hooks/useCounter'
import PropTypes from 'prop-types'
import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getScene } from 'store'
import { animationEnd } from 'store/scenes'

import Sprite from './sprite'

function AnimatedSprite({ node }) {
  const { status, sprite } = useSelector(getScene(node))
  const dispatch = useDispatch()
  const { id, flip } = status
  const { states, speed, ...rest } = sprite

  const frames = states[id]
  const [frame, setFrame] = useState(0)
  const updateFrame = () => setFrame((frame) => frame + 1)
  useCounter(speed, updateFrame, 0)

  const [cell, setCell] = useState(frames[frame])
  useEffect(() => {
    if (frame >= frames.length) {
      setFrame(0)
      dispatch(animationEnd(node))
    }
    setCell(frames[frame])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frame, frames])

  return <Sprite {...rest} flip={flip} cell={cell} />
}

AnimatedSprite.propTypes = {
  node: PropTypes.string.isRequired,
}

AnimatedSprite.defaultProps = {}

export default memo(AnimatedSprite)
