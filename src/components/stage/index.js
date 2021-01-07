import PropTypes from 'prop-types'

import useWindowSize from '../hooks/useWindowSize'
import classes from './stage.module.css'

function Stage({ width, height, background, children }) {
  const scale = useWindowSize(width, height)

  const style = {
    width,
    height,
    background,
    transform: `scale(${scale})`,
  }

  return (
    <div className={classes.stage} style={style}>
      {children}
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
