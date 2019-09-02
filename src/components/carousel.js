import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Carousel = ({ children, isLight }) => (
	<StyledCarousel isLight={isLight}>
    {children}
	</StyledCarousel>
)

const StyledCarousel = styled.div`
	height: 100%;
	overflow-y: scroll;

	& > div {
		margin: 0 2.5rem 5rem 0;

		& :last-child {
			margin-bottom: 0;
		}
	}

	& ::-webkit-scrollbar {
		background-color: ${props => props.isLight ? 'var(--light-grey)' : 'var(--dark-grey)'};
	}

	& ::-webkit-scrollbar-thumb {
		background-color: ${props => props.isLight ? 'var(--black)' : 'var(--white)'};
	}
`

Carousel.propTypes = {
	isLight: PropTypes.bool,
}

Carousel.defaultProps = {
	isLight: true,
}

export default Carousel