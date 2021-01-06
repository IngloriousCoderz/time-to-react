import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Fps from './fps'

const Wrapper = styled.div`
  width: 100vw;
  ${({ aspectRatio }) => css`
    height: calc(100vw / ${aspectRatio});
  `}
`

function Game({ aspectRatio }) {
  return (
    <Wrapper aspectRatio={aspectRatio}>
      <Fps delta={1 / 60} />
    </Wrapper>
  )
}

Game.propTypes = {
  aspectRatio: PropTypes.number.isRequired,
}

Game.defaultProps = {
  aspectRatio: 16 / 9,
}

export default Game
