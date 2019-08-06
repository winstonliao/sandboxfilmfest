import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = ({link, name, onClick}) => (
  <StyledButton as={!link && 'a'} to={link} onClick={onClick}>{name}</StyledButton>
)

const StyledButton = styled(Link)`
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