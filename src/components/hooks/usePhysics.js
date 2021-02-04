import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhysics, getScene, getStage } from 'store'
import { physicsUpdate } from 'store/scenes'
import { applyPhysics } from 'utils/physics'

export default function usePhysics(node) {
  const config = useSelector(getPhysics)
  const { width, height } = useSelector(getStage)
  const { physics, status } = useSelector(getScene(node))

  const bounds = { x: 0, y: 0, width, height }
  const { force, velocity, position } = status

  const dispatch = useDispatch()
  const body = useRef({ ...physics, force, velocity, position })
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
        // id,
        inertia,
        inverseIntertia,
        inverseMass,
        isSensor,
        isSleeping,
        isStatic,
        // label,
        mass,
        motion,
        position,
        restitution,
        sleepThreshold,
        slop,
        speed,
        timeScale,
        torque,
        // type,
        velocity,
        // vertices,
      } = body.current

      dispatch(
        physicsUpdate({
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
            // id,
            inertia,
            inverseIntertia,
            inverseMass,
            isSensor,
            isSleeping,
            isStatic,
            // label,
            mass,
            motion,
            position,
            restitution,
            sleepThreshold,
            slop,
            speed,
            timeScale,
            torque,
            // type,
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

  useEffect(() => {
    Physics.applyForce(body.current, { x: 0, y: 0 }, force)
  }, [force, Physics])

  useEffect(() => {
    Physics.setVelocity(body.current, velocity)
  }, [velocity, Physics])

  return body.current
}
