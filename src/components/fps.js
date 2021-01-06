import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getFps } from 'store/reducers'

const style = {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '1rem',
}

function Fps() {
  const fps = useSelector(getFps)

  return <div style={style}>{`${Math.round(fps)} FPS`}</div>
}

Fps.propTypes = {
  delta: PropTypes.number.isRequired,
}

Fps.defaultProps = {
  delta: 0,
}

export default Fps
