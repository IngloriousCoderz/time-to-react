import * as Nodes from 'components/nodes'
import PropTypes from 'prop-types'

function Node({ node, scene }) {
  const { id, type, children = [] } = scene

  if (type === 'Node') {
    return children.map((scene) => (
      <Node key={scene.id} node={scene.id} scene={scene} />
    ))
  }

  const Component = Nodes[type]
  return (
    <Component node={node}>
      {children.map((scene) => (
        <Node key={id} node={node} scene={scene} />
      ))}
    </Component>
  )
}

Node.propTypes = {
  node: PropTypes.string.isRequired,
  scene: PropTypes.object.isRequired,
}

export default Node