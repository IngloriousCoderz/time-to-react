import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getFrame, getPhysics } from 'store'
import { applyPhysics } from 'utils/physics'

import classes from './world.module.css'

function World({ children }) {
  const config = useSelector(getPhysics)
  const Physics = applyPhysics(config.type)
  useEffect(() => Physics.start(config), [config, Physics])

  const frame = useSelector(getFrame)
  useEffect(() => Physics.update(frame.delta), [frame, Physics])

  return (
    <div className={classes.world}>{Physics.getEngine() ? children : null}</div>
  )
}

export default World
