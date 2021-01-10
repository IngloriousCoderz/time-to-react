import { useResizeListener } from 'components/hooks/useResizeListener'
import PropTypes from 'prop-types'

import classes from './stage.module.css'

function Stage({ width, height, background, children }) {
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

Stage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  background: PropTypes.string,
}

Stage.defaultProps = {
  background: '#4c4c4c',
}

export default Stage
