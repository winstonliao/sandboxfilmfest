import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const SingleLayout = ({children}) => (
	<StyledSingleLayout>
    { children }
	</StyledSingleLayout>
)

const StyledSingleLayout = styled.div`
  width: 100vw;

  display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10vh 25vw;
`

SingleLayout.propTypes = {
}

SingleLayout.defaultProps = {
}

export default SingleLayout