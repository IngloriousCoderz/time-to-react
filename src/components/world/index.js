import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getPhysics, getTick } from 'store/reducers'
import { applyPhysics } from 'utils/physics'

import classes from './world.module.css'

function World({ children }) {
  const config = useSelector(getPhysics)
  const Physics = applyPhysics(config.type)
  useEffect(() => Physics.start(config), [config, Physics])

  const tick = useSelector(getTick)
  useEffect(() => Physics.update(tick.delta), [tick, Physics])

  return (
    <div className={classes.world}>{Physics.getEngine() ? children : null}</div>
  )
}

export default World
