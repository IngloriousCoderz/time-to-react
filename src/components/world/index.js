import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTick } from 'store/reducers'
import { updatePhysics } from 'store/thunks/physics'

function World({ children }) {
  const tick = useSelector(getTick)

  useEffect(() => {
    updatePhysics(tick.delta)
  }, [tick])

  return children
}

export default World
