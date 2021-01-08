import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move } from 'store/actions'
import { getNode, getPhysics, getStage } from 'store/reducers'
import { applyPhysics } from 'utils/physics'

export default function usePhysics(node) {
  const config = useSelector(getPhysics)
  const stage = useSelector(getStage)
  const { physics, state } = useSelector(getNode(node))

  const bounds = { x: 0, y: 0, width: stage.width, height: stage.height }

  const dispatch = useDispatch()
  const body = useRef()
  const Physics = applyPhysics(config.type)
  useEffect(() => {
    const onUpdate = () => dispatch(move(node, body.current.position, bounds))

    body.current = Physics.addBody(physics, { onUpdate })

    return () => Physics.removeBody(body.current, { onUpdate })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { velocity } = state
  useEffect(() => {
    Physics.setVelocity(body.current, velocity)
  }, [velocity, Physics])

  return body.current
}
