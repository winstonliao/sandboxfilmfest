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
`

SplitLayout.propTypes = {
}

SplitLayout.defaultProps = {
}

export default SplitLayout