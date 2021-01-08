import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getPhysics, getTick } from 'store/reducers'
import { engine, startPhysics, updatePhysics } from 'store/thunks/physics'

import classes from './world.module.css'

function World({ children }) {
  const physics = useSelector(getPhysics)
  useEffect(() => {
    startPhysics(physics)
  }, [physics])

  const tick = useSelector(getTick)
  useEffect(() => {
    updatePhysics(tick.delta)
  }, [tick])

  return <div className={classes.world}>{engine ? children : null}</div>
}

export default World
