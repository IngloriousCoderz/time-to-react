import { useCounter } from 'components/hooks/useCounter'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getDebug } from 'store'

import classes from './fps.module.css'

function Fps() {
  const { fps: fpsConfig } = useSelector(getDebug)
  const [fps, setFps] = useState(0)
  const updateFps = ({ fps }) => setFps(fps)

  useCounter(fpsConfig.frequency, updateFps)

  return <div className={classes.fps}>{`${Math.round(fps)} FPS`}</div>
}

export default Fps
