import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStageSize } from 'store/actions'
import { getStageSize } from 'store/reducers'

export default function useWindowSize(aspectRatio) {
  const windowSize = useSelector(getStageSize)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () =>
      dispatch(
        setStageSize({
          width: window.innerWidth,
          height: window.innerWidth / aspectRatio,
        })
      )

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [aspectRatio, dispatch])

  return windowSize
}
