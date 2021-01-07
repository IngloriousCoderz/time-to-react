import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move } from 'store/actions'
import { getNode, getStageSize, getTick } from 'store/reducers'
import * as Vector from 'utils/vector'

export default function useCustomPhysics(node, physics) {
  const tick = useSelector(getTick)
  const stageSize = useSelector(getStageSize)
  const { velocity, position } = useSelector(getNode(node))
  const dispatch = useDispatch()

  const body = useRef({ position })

  useEffect(() => {
    body.current.position = updateDirection(
      body.current.position,
      velocity,
      stageSize
    )
    dispatch(move(node, body.current.position))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick])

  return body.current
}

function updateDirection(position, velocity, stageSize) {
  let direction = { ...position }
  direction = Vector.sum(direction, velocity)
  direction.x = Vector.clamp(direction.x, 0, stageSize.width)
  direction.y = Vector.clamp(direction.y, 0, stageSize.height)
  return direction
}
