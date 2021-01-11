function Layer({ position, src, width, height, rows, cols, scale, map }) {
  const cellWidth = (width * scale) / cols
  const cellHeight = (height * scale) / rows

  return map.map((row, rowIndex) =>
    row.map((col, colIndex) => {
      const style = {
        position: 'absolute',
        top: `${position.y + rowIndex * cellHeight}px`,
        left: `${position.x + colIndex * cellWidth}px`,
        width: `${cellWidth}px`,
        height: `${cellHeight}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: `${width * scale}px ${height * scale}px`,
        backgroundRepeat: `repeat`,
        backgroundPosition: `-${colIndex * cellWidth}px -${
          rowIndex * cellHeight
        }px`,
      }

      return <div key={`${rowIndex}${colIndex}`} style={style}></div>
    })
  )
}

export default Layer
