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
  engine.world.bodies.forEach((body) =>
    Object.keys(body.listeners).forEach((listener) => {
      const velocity = Vector.sum(body.velocity, { x: x * scale, y: y * scale })
      setVelocity(body, velocity)
      body.listeners[listener]()
    })
  )
}

export function addBody(body, listeners) {
  const maxId = engine.world.bodies.length
    ? engine.bodies[engine.bodies.length - 1].id
    : 0

  body = {
    ...body,
    id: maxId,
    position: { x: 0, y: 0 },
    listeners,
  }
  engine.world.bodies.push(body)

  return body
}

export function setVelocity(body, velocity) {
  body.velocity = velocity
  body.position = Vector.sum(body.position, velocity)
}

export function removeBody(body, listeners) {
  engine.bodies = engine.world.bodies.filter(({ id }) => id === body.id)
  body = null
}
