import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const SingleLayout = ({children}) => (
	<StyledSingleLayout>
    { children }
	</StyledSingleLayout>
)

const StyledSingleLayout = styled.div`
  width: 100%;

  display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10rem 25rem;

	@media (max-width: 1424px) {
    padding: 10rem 15rem;
  }

  @media (max-width: 1080px) {
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

  @media (max-width: 413.98px) {
    padding: 10rem 3rem;
  }
`

SingleLayout.propTypes = {
}

SingleLayout.defaultProps = {
}

export default SingleLayout