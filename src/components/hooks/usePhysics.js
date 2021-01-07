import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move } from 'store/actions'
import { getNode, getTick } from 'store/reducers'
import { addBody, removeBody, setVelocity } from 'store/thunks/physics'

export default function useBody(node, physics) {
  const tick = useSelector(getTick)
  const { velocity } = useSelector(getNode(node))
  const dispatch = useDispatch()

  const body = useRef()

  useEffect(() => {
    const onUpdate = () => dispatch(move(node, body.current.position))
    body.current = addBody({ ...physics, onUpdate })
    return () => removeBody(body.current)
  }, [node, physics, dispatch])

  useEffect(() => {
    setVelocity(body.current, velocity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick])

  return body.current
}
