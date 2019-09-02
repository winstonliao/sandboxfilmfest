import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SplitLayout from '../components/splitLayout'
import Paragraph from '../components/paragraph'
import ParagraphContainer from '../components/paragraphContainer'

const HowItWorksSection = () => (
	<StyledHowItWorksSection>
		<SplitLayout
			left = {
				<div className='title-wrapper'>
					<p className='title'>HOW<br></br>IT<br></br>WORKS</p>
				</div>
			}
			right = {
				<ParagraphContainer>
					{paragraphs.map((paragraph, i) => (
						<Paragraph key={i} {...paragraph}></Paragraph>
					))}
				</ParagraphContainer>
			}
		></SplitLayout>
	</StyledHowItWorksSection>
)

const paragraphs = [
	{
		title: 'Preparation & Kickoff',
		text: 'Before the film fest, you can form your team of four or sign up to be matched with others. At the kickoff, your team will randomly pick prompts from a set of three categories. You have to use at least three of them in your film.',
	},
	{
		title: 'Writing, Shooting, & Editing',
		text: 'After kickoff, you have 48 hours to write, shoot, and edit your film. Your team members must be the main contributors to the creation of the film, and you may recruit actors and other crew members to help out!',
	}
]

const StyledHowItWorksSection = styled.div`

	& .title-wrapper {
		display: flex;
		align-items: center;
		height: 100%;

		& .title {
			padding-left: 10rem;
			line-height: 6rem;

			color: var(--black);
			font-family: var(--display-font);
			font-size: var(--display);
		}
	}
`

HowItWorksSection.propTypes = {
}

HowItWorksSection.defaultProps = {
}

export default HowItWorksSection