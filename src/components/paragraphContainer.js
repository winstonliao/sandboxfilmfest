import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ParagraphContainer = ({ children }) => (
	<StyledParagraphContainer>
    { children }
	</StyledParagraphContainer>
)

const StyledParagraphContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;		
  padding: 10rem;

  background-color: var(--black);
  color: var(--white);

  & div:last-child {
    margin-bottom: 0;
  }
`

ParagraphContainer.propTypes = {
}

ParagraphContainer.defaultProps = {
}

export default ParagraphContainer