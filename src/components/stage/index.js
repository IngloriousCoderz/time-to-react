import PropTypes from 'prop-types'

import useWindowSize from '../hooks/useWindowSize'
import classes from './stage.module.css'

function Stage({ aspectRatio, children }) {
  const windowSize = useWindowSize(aspectRatio)
  const height = `calc(100vw / ${aspectRatio})`

  return windowSize ? (
    <div className={classes.stage} style={{ height }}>
      {children}
    </div>
  ) : null
}

Stage.propTypes = {
  aspectRatio: PropTypes.number.isRequired,
}

Stage.defaultProps = {
  aspectRatio: 16 / 9,
}

export default Stage
