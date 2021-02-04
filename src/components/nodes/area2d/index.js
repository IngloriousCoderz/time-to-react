import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getScene } from 'store'

function Area2D({ node, children }) {
  const { status } = useSelector(getScene(node))

  const style = {
    position: 'absolute',
    top: `${status.position.y}px`,
    left: `${status.position.x}px`,
  }

  return <div style={style}>{children}</div>
}

export default memo(Area2D)
