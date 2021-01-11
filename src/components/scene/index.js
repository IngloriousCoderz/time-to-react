import PropTypes from 'prop-types'

import Node from './node'

function Scene({ scene }) {
  return <Node node={scene.id} scene={scene} />
}

Scene.propTypes = {
  scene: PropTypes.object.isRequired,
}

export default Scene
