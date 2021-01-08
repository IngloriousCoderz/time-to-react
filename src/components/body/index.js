import usePhysics from 'components/hooks/usePhysics'

function Body({ node, children }) {
  usePhysics(node)

  return children
}

export default Body
