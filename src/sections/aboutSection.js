import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SplitLayout from '../components/splitLayout'
import Carousel from '../components/carousel'
import ProfileItem from '../components/profileItem'

const AboutSection = ({ id }) => (
	<StyledAboutSection id={id}>
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

const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const profiles = [
	{
		name: 'Winston Liao',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: 'http://winstonliao.com',
		linkName: 'Portfolio',
	},
	{
		name: 'Jack Virnich',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: 'http://winstonliao.com',
		linkName: 'Portfolio',
	},
	{
		name: 'Jason McRuer',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: 'http://winstonliao.com',
		linkName: 'Portfolio',
	},
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
			font-weight: var(--display-weight);
			font-size: var(--display);
		}
	}

	& .carousel-wrapper {
    height: 100vh;
    padding: 10rem 5rem 10rem 10rem;
		background-color: var(--black);
  }
`

AboutSection.propTypes = {
}

AboutSection.defaultProps = {
}

export default AboutSection