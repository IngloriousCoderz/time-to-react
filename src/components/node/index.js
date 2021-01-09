import { useSelector } from 'react-redux'
import { getNode } from 'store/reducers'

function Node({ id, component, ...rest }) {
  const Component = component
  const node = useSelector(getNode(id))

  return <Component id={id} {...rest} {...node} />
}

export default Node
