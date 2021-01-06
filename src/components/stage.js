import PropTypes from 'prop-types'

import useWindowSize from './hooks/useWindowSize'

const style = {
  width: '100vw',
}

function Stage({ aspectRatio, children }) {
  const windowSize = useWindowSize()
  const height = `calc(100vw / ${aspectRatio})`

  return windowSize ? <div style={{ ...style, height }}>{children}</div> : null
}

Stage.propTypes = {
  aspectRatio: PropTypes.number.isRequired,
}

Stage.defaultProps = {
  aspectRatio: 16 / 9,
}

export default Stage
