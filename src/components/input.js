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
  color: var(--white);

& label {
  display: block;
  font-size: var(--large);
  font-weight: var(--heavy-weight);
  margin-bottom: 1rem;
}

& > :nth-child(2) {
  display: inline-block;
  height: auto;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: var(--white);
  color: var(--white);
  background-color: var(--black);
  border-radius: 5px;
  padding: 1rem;
  text-align: left;
  font-weight: var(--light-weight);
  margin-bottom: 1rem;
  line-height: 1.5rem;

  -webkit-box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);
  -moz-box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);
  box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);

  transition: ease-in-out 0.3s;

  &:focus {
    outline: none;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
  }
}

& input.transition {
  opacity: 0;
}
`

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isLong: PropTypes.bool,
}

Input.defaultProps = {
  name: '',
  label: '',
  placeholder: '',
  isLong: false,
}

export default Input