import { useResizeListener } from 'components/hooks/useResizeListener'
import { useSelector } from 'react-redux'
import { getStage } from 'store'

import classes from './stage.module.css'

function Stage({ children }) {
  const { width, height, background } = useSelector(getStage)
  const { ref, transform } = useResizeListener(width, height)

  const style = { width, height, background, transform }

  return (
    <div className={classes.wrapper} ref={ref}>
      <div className={classes.stage} style={style}>
        {children}
      </div>
    </div>
  )
}

export default Stage
