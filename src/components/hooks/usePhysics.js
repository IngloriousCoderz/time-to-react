import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNode, getPhysics, getStage } from 'store'
import { update } from 'store/nodes'
import { applyPhysics } from 'utils/physics'

export default function usePhysics(node) {
  const config = useSelector(getPhysics)
  const stage = useSelector(getStage)
  const { physics, status } = useSelector(getNode(node))

  const bounds = { x: 0, y: 0, width: stage.width, height: stage.height }

  const dispatch = useDispatch()
  const body = useRef({
    ...physics,
    force: status.force,
    position: status.position,
    velocity: status.velocity,
  })
  const Physics = applyPhysics(config.type)
  useEffect(() => {
    const onUpdate = () => {
      const {
        angle,
        angularSpeed,
        angularVelocity,
        area,
        // axes,
        // bounds,
        // collisionFilter,
        density,
        force,
        friction,
        frictionAir,
        frictionStatic,
        id,
        inertia,
        inverseIntertia,
        inverseMass,
        isSensor,
        isSleeping,
        isStatic,
        label,
        mass,
        motion,
        position,
        restitution,
        sleepThreshold,
        slop,
        speed,
        timeScale,
        torque,
        type,
        velocity,
        // vertices,
      } = body.current

      dispatch(
        update({
          node,
          body: {
            angle,
            angularSpeed,
            angularVelocity,
            area,
            // axes,
            // bounds,
            // collisionFilter,
            density,
            force,
            friction,
            frictionAir,
            frictionStatic,
            id,
            inertia,
            inverseIntertia,
            inverseMass,
            isSensor,
            isSleeping,
            isStatic,
            label,
            mass,
            motion,
            position,
            restitution,
            sleepThreshold,
            slop,
            speed,
            timeScale,
            torque,
            type,
            velocity,
            // vertices,
          },
          bounds,
        })
      )
    }

    body.current = Physics.addBody(body.current, { onUpdate })

    return () => Physics.removeBody(body.current, { onUpdate })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { force, velocity } = status
  useEffect(() => {
    Physics.applyForce(body.current, { x: 0, y: 0 }, force)
  }, [force, Physics])

  useEffect(() => {
    Physics.setVelocity(body.current, velocity)
  }, [velocity, Physics])

  return body.current
}
