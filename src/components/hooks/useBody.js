import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move } from 'store/actions'
import { getNode } from 'store/reducers'
import { addBody, removeBody, setVelocity } from 'store/thunks/physics'

export default function useBody(node, physics) {
  const body = useRef()
  const { velocity } = useSelector(getNode(node))
  const dispatch = useDispatch()

  useEffect(() => {
    const onUpdate = () => dispatch(move(node, body.current.position))

    body.current = addBody({ ...physics, onUpdate })

    return () => removeBody(body.current)
  }, [node, physics, dispatch])

  useEffect(() => {
    if (velocity) {
      setVelocity(body.current, velocity)
    }
  }, [velocity])

  return body.current
}
