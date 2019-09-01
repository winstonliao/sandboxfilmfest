import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Paragraph = ({ title, text}) => (
	<StyledParagraph>
    <p className='title'>{ title.toUpperCase() }</p>
    <p className='text'>{ text }</p>
	</StyledParagraph>
)

const StyledParagraph = styled.div`
  margin-bottom: 5rem;

  & .title {
    font-size: var(--medium);
    font-weight: var(--heavy-weight);
  }

  & .text {
    font-size: var(--small);
    font-weight: var(--medium-weight);
    line-height: 1rem;
  }
`

Paragraph.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

Paragraph.defaultProps = {
  title: '',
  text: '',
}

export default Paragraph