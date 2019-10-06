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
	padding: 10rem 25rem;

	@media (max-width: 1399.98px) {

  }

  @media (max-width: 1024px) {
    padding: 10rem 15rem;
    height: auto;		
  }

  @media (max-width: 907.98px) {
		
  }

  @media (max-width: 767.98px) {
		padding: 10rem 10rem;
  }

  @media (max-width: 575.98px) {
    padding: 10rem 5rem;
  }
`

SingleLayout.propTypes = {
}

SingleLayout.defaultProps = {
}

export default SingleLayout