import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStageSize } from 'store/actions'
import { getStageSize } from 'store/reducers'

export default function useWindowSize() {
  const windowSize = useSelector(getStageSize)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () =>
      dispatch(
        setStageSize({ width: window.innerWidth, height: window.innerHeight })
      )

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [dispatch])

  return windowSize
}
