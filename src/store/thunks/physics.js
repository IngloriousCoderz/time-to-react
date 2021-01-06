import Matter from 'matter-js'
import { getDelta, getStageSize } from 'store/reducers'

const gravity = {
  x: 0,
  y: 1,
  scale: 0.001,
}

let engine
let onBodyUpdate

export const startPhysics = () => (dispatch, getState) => {
  const stageSize = getStageSize(getState())
  const world = Matter.World.create({
    gravity,
    // TODO: stageSize is still undefined here
    bounds: {
      min: { x: 0, y: 0 },
      max: { x: stageSize.width, y: stageSize.height },
    },
  })
  engine = Matter.Engine.create({ world })
}

export const updatePhysics = () => (dispatch, getState) => {
  const delta = getDelta(getState())
  Matter.Engine.update(engine, delta)
}

export const addBody = ({ shape, args, onUpdate, ...options }) => {
  onBodyUpdate = onUpdate
  const body = Matter.Bodies[shape](...args, options)
  Matter.World.addBody(engine.world, body)
  Matter.Events.on(engine, 'afterUpdate', onUpdate)
  return body
}

export const setVelocity = (body, velocity) => {
  Matter.Body.setVelocity(body, velocity)
}

export const removeBody = (body) => {
  Matter.Events.off(engine, 'afterUpdate', onBodyUpdate)
  Matter.World.remove(engine.world, body)
}
