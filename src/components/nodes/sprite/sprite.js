import PropTypes from 'prop-types'
import { memo } from 'react'

function Sprite({
  src,
  width,
  height,
  rows,
  cols,
  scale,
  flip,
  cell,
  children,
}) {
  const cellWidth = width / cols
  const cellHeight = height / rows

  let transform = `scale(${scale})`
  if (flip.includes('h')) {
    transform += ' scaleX(-1)'
  }
  if (flip.includes('v')) {
    transform += ' scaleY(-1)'
  }

  const style = {
    width: `${cellWidth}px`,
    height: `${cellHeight}px`,
    backgroundImage: `url(${src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `-${cell[0] * cellWidth}px -${cell[1] * cellHeight}px`,
    transform,
  }

  return <div style={style}>{children}</div>
}

Sprite.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  flip: PropTypes.string.isRequired,
  cell: PropTypes.arrayOf(PropTypes.number).isRequired,
}

Sprite.defaultProps = {
  rows: 1,
  cols: 1,
  scale: 1,
  cell: [0, 0],
  flip: '',
}

export default memo(Sprite)
