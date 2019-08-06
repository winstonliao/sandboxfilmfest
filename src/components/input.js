import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Input = ({name, label, placeholder, value, isLong, onChange}) => (
  <StyledInput>
    <label>{label}</label>
    {isLong ? (
      <textarea type='text' onChange={onChange} name={name} placeholder={placeholder} value={value}></textarea>
     ) : (
      <input type='text' onChange={onChange} name={name} placeholder={placeholder} value={value}></input>
     )}
  </StyledInput>
)

const StyledInput = styled.div`
`

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isLong: PropTypes.bool,
}

Input.defaultProps = {
  name: '',
  placeholder: '',
  isLong: false,
}

export default Input