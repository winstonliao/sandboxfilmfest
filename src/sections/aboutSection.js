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

const desc = 'The Sandbox Film Fest was started in 2018 with the goal of empowering people to engage in collaborative creativity. With participation from over 30 students, both new and experienced, the festival has produced six short films over two events.'

const profiles = [
	{
		name: 'Winston Liao',
		bio: 'Winston is a designer, engineer, and filmmaker based in the San Francisco Bay Area. He is currently studying mechatronics at Stanford University with the goal of developing technologies that facilitate joyful interactions and meaningful connections.',
		link: 'http://winstonliao.com',
		linkName: 'Portfolio',
		image: '../images/winston.jpg'
	},
	{
		name: 'Jack Virnich',
		bio: 'Jack is an experimental filmmaker from Denver, Colorado and a graduate of the Film & Media studies department at Stanford. Jack loves horror movies and the Japanese new wave. His favorite movie is Under the Skin.',
		link: 'https://www.youtube.com/channel/UC7zIOtDEG2bHlPPH1qHIrzg',
		linkName: 'YouTube',
		image: '../images/jack.jpg'
	},
	{
		name: 'Jason McRuer',
		bio: 'Jason has been writing, directing, shooting, and editing short films since 2012. Having learned most of his skills by messing around on projects, he has loved the rapid growth that has come from these intense, adrenaline-packed weekends of filmmaking.',
		link: 'https://www.jasonmcruer.com',
		linkName: 'Portfolio',
		image: '../images/jason.jpg'
	},
]

const StyledAboutSection = styled.div`

	& .title-wrapper {
		display: flex;
    flex-direction: column;
		justify-content: center;
		height: 100%;

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

	@media (max-width: 1424px) {
    & .carousel-wrapper {
      padding: 5rem;
    }
  }
	
	@media (max-width: 1080px) {
		& .title-wrapper {
			background-color: var(--black);
		
			& .title, .desc {
				color: var(--white);
			}
		}

		& .carousel-wrapper {
      height: auto;
    }
	}
	
	@media (max-width: 768px) {
    & .carousel-wrapper {
      padding: 10rem 5rem;
		}

		& .title-wrapper .title {
			font-size: var(--display);
			line-height: 4rem;
		}
		
		& .desc {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
	}
	
	@media (max-width: 413px) {
    & .carousel-wrapper {
      padding: 10rem 3rem;
    }
  }
`

AboutSection.propTypes = {
}

AboutSection.defaultProps = {
}

export default AboutSection