import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const MessageBox = ({ headline, message}) => (
  <StyledMessageBox>
    <div className='messageBox'>
      <p className='headline'>{headline}</p>
      <p className='message'>{message}</p>
    </div>
  </StyledMessageBox>
)

const StyledMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
  color: var(--black);
  font-family: var(--main-font);

  & .messageBox {
    width: 20rem;
  }

  & .headline {
    text-align: center;
    font-size: var(--large);
    font-weight: var(--heavy-weight);
  }

  & .message {
    margin-bottom: 0;
    font-weight: var(--medium-weight);
  }
`

MessageBox.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
}

MessageBox.defaultProps = {
  title: '',
  message: '',
}

export default MessageBox