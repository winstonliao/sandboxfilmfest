import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Carousel = ({ children}) => (
	<StyledCarousel>
    {...children}
	</StyledCarousel>
)

const StyledCarousel = styled.div`
`

Carousel.propTypes = {
}

Carousel.defaultProps = {
}

export default Carousel