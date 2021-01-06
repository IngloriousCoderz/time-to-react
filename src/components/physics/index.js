import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTick } from 'store/reducers'
import { updatePhysics } from 'store/thunks/physics'

function Physics({ children }) {
  const tick = useSelector(getTick)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updatePhysics())
  }, [tick, dispatch])

  return children
}

export default Physics
