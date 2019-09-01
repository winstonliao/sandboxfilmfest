import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Carousel = ({ children }) => (
	<StyledCarousel>
    {children}
	</StyledCarousel>
)

const StyledCarousel = styled.div`
	height: 80vh;
	overflow-y: scroll;

	& > div {
		margin: 0 2.5rem 5rem 0;
	}

	& ::-webkit-scrollbar {
		background-color: var(--light-grey);
	}

	& ::-webkit-scrollbar-thumb {
		background-color: var(--black);
	}
`

Carousel.propTypes = {
}

Carousel.defaultProps = {
}

export default Carousel