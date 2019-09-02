import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = ({link, name, color, bgColor, onClick}) => (
  <StyledButton as={!link && 'a'} to={link} color={color} bgColor={bgColor} onClick={onClick}>{name}</StyledButton>
)

const StyledButton = styled(Link)`
  display: inline-block;
  width: 100%;

  border: none;
  padding: 1rem;
  text-align: center;

  cursor: pointer;
  color: ${props => props.bgColor};
  background-color: ${props => props.color};
  font-size: var(--medium);
  font-weight: var(--medium-weight);

  -webkit-box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);
  -moz-box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);
  box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);

  transition: ease-in-out 0.3s;

  &:hover {
    outline: none;
    -webkit-box-shadow: 0px 0px 3px 0px ${props => props.color};
    -moz-box-shadow: 0px 0px 3px 0px ${props => props.color};
    box-shadow: 0px 0px 3px 0px ${props => props.color};
  }
`

Button.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
}

Button.defaultProps = {
  link: '',
  name: '',
}

export default Button