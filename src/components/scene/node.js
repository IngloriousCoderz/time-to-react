import * as Nodes from 'components/nodes'
import PropTypes from 'prop-types'

function Node({ node, scene }) {
  const { type, children = [] } = scene
  const Component = Nodes[type]
  return (
    <Component node={node}>
      {children.map((scene) => (
        <Node key={scene.id} node={node} scene={scene} />
      ))}
    </Component>
  )
}

Node.propTypes = {
  node: PropTypes.string.isRequired,
  scene: PropTypes.object.isRequired,
}

export default Node
