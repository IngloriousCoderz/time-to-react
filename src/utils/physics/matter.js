import Matter from 'matter-js'

let engine = null

export function getEngine() {
  return engine
}

export function start(physics) {
  const world = Matter.World.create(physics.world)
  engine = Matter.Engine.create({ world })
}

export function update(delta) {
  Matter.Engine.update(engine, delta)
}

export function addBody({ shape, args, ...options }, listeners) {
  const body = Matter.Bodies[shape](...args, options)
  Matter.World.add(engine.world, body)
  Matter.Events.on(engine, 'afterUpdate', listeners.onUpdate)
  return body
}

export function applyForce(body, position, force) {
  Matter.Body.applyForce(body, position, force)
}

export function setVelocity(body, velocity) {
  Matter.Body.setVelocity(body, velocity)
}

export function removeBody(body, listeners) {
  Matter.Events.off(engine, 'afterUpdate', listeners.onUpdate)
  Matter.World.remove(engine.world, body)
}
