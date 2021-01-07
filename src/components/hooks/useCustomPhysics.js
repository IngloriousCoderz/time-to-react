import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move } from 'store/actions'
import { getNode, getStage, getTick } from 'store/reducers'
import * as Vector from 'utils/vector'

export default function useCustomPhysics(node, physics) {
  const tick = useSelector(getTick)
  const stage = useSelector(getStage)
  const { state, sprite } = useSelector(getNode(node))
  const dispatch = useDispatch()

  const { velocity, position } = state
  const { width, height, rows, cols } = sprite

  const spriteWidth = width / cols
  const spriteHeight = height / rows

  const bounds = {
    x: 0,
    y: 0,
    width: stage.width - spriteWidth,
    height: stage.height - spriteHeight,
  }

  useEffect(() => {
    if (Vector.length(velocity)) {
      const direction = Vector.sum(position, velocity)
      dispatch(move(node, direction, bounds))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick])
}
