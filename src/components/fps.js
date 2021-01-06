import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getDelta } from 'store/reducers'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
`

function Fps() {
  const delta = useSelector(getDelta)

  return <Wrapper>{`${Math.round(1 / delta)} FPS`}</Wrapper>
}

Fps.propTypes = {
  delta: PropTypes.number.isRequired,
}

Fps.defaultProps = {
  delta: 0,
}

export default Fps
