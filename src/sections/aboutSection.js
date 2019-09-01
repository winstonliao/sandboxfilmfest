import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SplitLayout from 'splitLayout'
import Paragraph from 'paragraph'

const AboutSection = () => (
	<StyledAboutSection>
		<SplitLayout>
			<h1 className='title'>ABOUT</h1>
			<div className='text'>
				{paragraphs.map((i, paragraph) => (
          <Paragraph key={i} {...paragraph}></Paragraph>
        ))}
			</div>
		</SplitLayout>
	</StyledAboutSection>
)

const paragraphs = [
	{
		title: '',
		text: '',
	},
	{
		title: '',
		text: '',
	}
]
const StyledAboutSection = styled.div`
	margin: 10rem 10rem;
`

AboutSection.propTypes = {
}

AboutSection.defaultProps = {
}

export default AboutSection