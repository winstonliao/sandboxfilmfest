import PropTypes from 'prop-types'
import React, {Component} from 'react'
import styled from 'styled-components'

class Carousel extends Component {
  constructor(props) {
		super(props);
	}

	render() {
    return (
			<StyledCarousel isLight={this.props.isLight} onScroll={ this.props.scrollHandler }>
				{this.props.children}
			</StyledCarousel>
		)
	}
}

const StyledCarousel = styled.div`
	height: 100%;
	overflow-y: scroll;

	& > div {
		margin: 0 2.5rem 2.5rem 0;

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

	@media (max-width: 1024px) {
		display: flex;
		flex-direction: row;

		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;

		& div {
			display: inline-block;
		}

		& > div {
			& :last-child {
				margin-right: 0;
			}
		}
  }
`

Carousel.propTypes = {
	isLight: PropTypes.bool,
}

Carousel.defaultProps = {
	isLight: true,
}

export default Carousel