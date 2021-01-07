import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move } from 'store/actions'
import { getNode, getStage, getTick } from 'store/reducers'
import { addBody, removeBody, setVelocity } from 'store/thunks/physics'
import * as Vector from 'utils/vector'

export default function usePhysics(node) {
  const tick = useSelector(getTick)
  const stage = useSelector(getStage)
  const { physics, state, sprite } = useSelector(getNode(node))
  const dispatch = useDispatch()
  const body = useRef()

  const { velocity } = state
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
    const onUpdate = () =>
      dispatch(move(node, Vector.round(body.current.position), bounds))

    body.current = addBody(physics, { onUpdate })

    return () => removeBody(body.current, { onUpdate })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (Vector.length(velocity)) {
      setVelocity(body.current, velocity)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick])

  return body.current
}
