import PropTypes from 'prop-types'

function Sprite({ sheet, width, height, rows, cols, cell, flip, children }) {
  const cellWidth = width / cols
  const cellHeight = height / rows

  let transform = ''
  if (flip.includes('h')) {
    transform += ' scaleX(-1)'
  }
  if (flip.includes('v')) {
    transform += ' scaleY(-1)'
  }

  const style = {
    width: `${cellWidth}px`,
    height: `${cellHeight}px`,
    backgroundImage: `url(${sheet})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `-${cell[0] * cellWidth}px -${cell[1] * cellHeight}px`,
    transform,
  }

  return <div style={style}>{children}</div>
}

Sprite.propTypes = {
  sheet: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  cell: PropTypes.arrayOf(PropTypes.number).isRequired,
  flip: PropTypes.string,
}

Sprite.defaultProps = {
  rows: 1,
  cols: 1,
  cell: [0, 0],
  flip: '',
}

export default Sprite
