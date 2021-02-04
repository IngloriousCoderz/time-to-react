import * as Nodes from 'components/nodes'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getScenes } from 'store'

function Node({ scene, root }) {
  const scenes = useSelector(getScenes)
  const { type, children = [] } = scene

  const subscenes = children.map((scene) =>
    scene.type ? scene : scenes[scene.id]
  )

  if (type === 'Node') {
    return subscenes.map((scene) => (
      <Node key={scene.id} scene={scene} root={scene.id} />
    ))
  }

  const Component = Nodes[type]
  return (
    <Component node={root}>
      {subscenes.map((scene) => (
        <Node key={scene.id} scene={scene} root={root} />
      ))}
    </Component>
  )
}

Node.propTypes = {
  scene: PropTypes.object.isRequired,
  root: PropTypes.string.isRequired,
}

export default Node
