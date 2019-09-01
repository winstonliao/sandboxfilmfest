import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const SingleLayout = ({children}) => (
	<StyledSingleLayout>
    {...children}
	</StyledSingleLayout>
)

const StyledSingleLayout = styled.div`
  height: 100vh;
  width: 100vw;
	padding: 10vh 20vw;
`

SingleLayout.propTypes = {
}

SingleLayout.defaultProps = {
}

export default SingleLayout