import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const SplitLayout = ({left, right}) => (
	<StyledSplitLayout>
    <div class='left'>
      { left }
    </div>
    <div class='right'>
      { right }
    </div>
	</StyledSplitLayout>
)

const StyledSplitLayout = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  height: 100vh;
  width: 100vw;

  & > div {
    height: 100%;
  }
`

SplitLayout.propTypes = {
}

SplitLayout.defaultProps = {
}

export default SplitLayout