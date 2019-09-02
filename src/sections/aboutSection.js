import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SplitLayout from '../components/splitLayout'
import Carousel from '../components/carousel'
import ProfileItem from '../components/profileItem'

const AboutSection = () => (
	<StyledAboutSection>
		<SplitLayout
			left = {
				<div className='title-wrapper'>
					<p className='title'>ABOUT</p>
					<p className='desc'>{ desc }</p>
				</div>
			}
			right={
				<div className='carousel-wrapper'>
					<Carousel isLight={false}>
						{profiles.map((profile, i) => (
							<ProfileItem key={i} {...profile}></ProfileItem>
						))}
					</Carousel>
				</div>
			}
		></SplitLayout>
	</StyledAboutSection>
)

const desc = 'The Sandbox 48-Hour Film Fest was started in May 2018 at Stanford University.'

const profiles = [
]

const StyledAboutSection = styled.div`

	& .title-wrapper {
		display: flex;
    flex-direction: column;
		justify-content: center;
		height: 100%;

		& .title, .desc {
			padding: 0 10rem;
		}

		& .title {
			line-height: 6rem;

			color: var(--black);
			font-family: var(--display-font);
			font-size: var(--display);
		}
	}

	& .carousel-wrapper {
    height: 100vh;
    padding: 10rem 5rem 10rem 0;
		background-color: var(--black);
  }
`

AboutSection.propTypes = {
}

AboutSection.defaultProps = {
}

export default AboutSection