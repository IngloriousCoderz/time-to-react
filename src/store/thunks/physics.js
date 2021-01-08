import Matter from 'matter-js'

export let engine

export const startPhysics = (physics) => {
  const world = Matter.World.create(physics)
  engine = Matter.Engine.create({ world })
}

export const updatePhysics = (delta) => {
  Matter.Engine.update(engine, delta)
}

export const addBody = ({ shape, args, ...options }, listeners) => {
  const body = Matter.Bodies[shape](...args, options)
  Matter.World.addBody(engine.world, body)
  Matter.Events.on(engine, 'afterUpdate', listeners.onUpdate)
  return body
}

export const setVelocity = (body, velocity) => {
  Matter.Body.setVelocity(body, velocity)
}

export const removeBody = (body, listeners) => {
  Matter.Events.off(engine, 'afterUpdate', listeners.onUpdate)
  Matter.World.remove(engine.world, body)
}
