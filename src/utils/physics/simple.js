import * as Vector from 'utils/vector'

let engine = null

export function getEngine() {
  return engine
}

export function start(physics) {
  engine = { world: { ...physics.world, bodies: [] } }
}

export function update(delta) {
  const { x, y, scale } = engine.world.gravity
  engine.world.bodies.forEach((body) => {
    applyForce(body, { x: 0, y: 0 }, { x: x * scale, y: y * scale })
    Object.values(body.listeners).forEach((listener) => listener())
  })
}

export function addBody(body, listeners) {
  const maxId = engine.world.bodies.length
    ? engine.bodies[engine.bodies.length - 1].id
    : 0

  body = { ...body, id: maxId, listeners }
  engine.world.bodies.push(body)

  return body
}

export function applyForce(body, position, force) {
  body.force = force
  setVelocity(body, Vector.sum(body.velocity, force))
}

export function setVelocity(body, velocity) {
  body.velocity = velocity
  body.position = Vector.sum(body.position, velocity)
}

export function removeBody(body, listeners) {
  engine.bodies = engine.world.bodies.filter(({ id }) => id === body.id)
  body = null
}
