import PropTypes from 'prop-types'
import React, {Component} from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

class Carousel extends Component {
  constructor(props) {
		super(props);
		this.state = {
			hasScrolled: false,
		}
		this.scrollHandler = this.scrollHandler.bind(this);
	}

	scrollHandler() {
		this.setState({
			hasScrolled: true,
		})
	}

	render() {
    return (
			<StyledCarousel isLight={this.props.isLight} id={this.props.id} onScroll={this.scrollHandler}>
				{this.props.children}
				<MediaQuery query="(max-width: 767.98px)"><span class={this.state.hasScrolled ? 'arrow hide animate' : 'arrow animate'}><p>→</p></span></MediaQuery>
			</StyledCarousel>
		)
	}
}

const StyledCarousel = styled.div`
	height: 100%;
	overflow-y: scroll;

	& .arrow {
		display: block;
		position: absolute;
		align-self: center;
		right: 15px;
		transform: translateY(-1.25rem);

		transition: ease-in-out 1s opacity;

		&.animate {
			animation-name: left-right;
			animation-duration: 1s;
			animation-iteration-count: infinite;
			animation-direction: alternate;

				/* Safari 4.0 - 8.0 */
			-webkit-animation-name: left-right; 
			-webkit-animation-duration: 1s;
			-webkit-animation-iteration-count: infinite;
			-webkit-animation-direction: alternate;
		}

		& p {
			margin-bottom: 0;
			color: var(--white);
			text-shadow: 0 0 5px var(--black);
			font-size: var(--display);
			font-weight: var(--display-weight);
		}

		&.hide {
			opacity: 0;
			animation-play-state: paused;
		}

		@keyframes left-right {
			from {transform: translate(-0.5rem, -1.25rem);}
			to {transform: translate(-2rem, -1.25rem);}
		}
	}

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

	@media (max-width: 1080px) {
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