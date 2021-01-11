import usePhysics from 'components/hooks/usePhysics'
import { memo } from 'react'

function Body({ node, children }) {
  usePhysics(node)

  return children
}

export default memo(Body)
