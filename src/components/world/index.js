import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getPhysics, getStage, getTick } from 'store/reducers'
import { startPhysics, updatePhysics } from 'store/thunks/physics'

import classes from './world.module.css'

function World({ children }) {
  const stage = useSelector(getStage)
  const physics = useSelector(getPhysics)
  const tick = useSelector(getTick)

  const world = useRef()

  useEffect(() => {
    world.current = startPhysics({ stage, physics })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    updatePhysics(tick.delta)
  }, [tick])

  return <div className={classes.world}>{world.current ? children : null}</div>
}

export default World
