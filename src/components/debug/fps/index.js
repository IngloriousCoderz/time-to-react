import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getTick } from 'store/reducers'

import classes from './fps.module.css'

function Fps() {
  const { fps } = useSelector(getTick)

  return <div className={classes.fps}>{`${Math.round(fps)} FPS`}</div>
}

Fps.propTypes = {
  delta: PropTypes.number.isRequired,
}

Fps.defaultProps = {
  delta: 0,
}

export default Fps
