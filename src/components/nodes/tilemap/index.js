import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getNode } from 'store'

import Layer from './layer'

function Tilemap({ node }) {
  const { status, layers } = useSelector(getNode(node))

  const style = {
    position: 'absolute',
    top: `${status.position.y}px`,
    left: `${status.position.x}px`,
  }

  return (
    <div style={style}>
      {layers.map((layer) => (
        <Layer key={layer.id} {...layer} />
      ))}
    </div>
  )
}

export default memo(Tilemap)
