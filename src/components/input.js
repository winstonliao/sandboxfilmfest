import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Input = ({name, label, placeholder, value, isLong, color, onChange}) => (
  <StyledInput color={color}>
    <label>{label}</label>
    {isLong ? (
      <textarea type='text' onChange={onChange} name={name} placeholder={placeholder} value={value}></textarea>
     ) : (
      <input type='text' onChange={onChange} name={name} placeholder={placeholder} value={value}></input>
     )}
  </StyledInput>
)

const StyledInput = styled.div`
  color: ${props => props.color};

  & label {
    display: block;
    font-size: var(--medium);
    font-weight: var(--medium-weight);
    margin-bottom: 1rem;
  }

  & > :nth-child(2) {
    display: inline-block;
    height: auto;
    width: 100%;
    padding: 1rem;
    text-align: left;
    margin-bottom: 1rem;
    line-height: 1.5rem;

    font-weight: var(--light-weight);
    border: solid 2px ${props => props.color};
    color: ${props => props.color};
    background-color: transparent;

    -webkit-box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);
    -moz-box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);
    box-shadow: 0px 0px 0px 0px rgba(255,255,255,0);

    transition: ease-in-out 0.3s;

    &:focus {
      outline: none;
      -webkit-box-shadow: 0px 0px 3px 0px ${props => props.color};
      -moz-box-shadow: 0px 0px 3px 0px ${props => props.color};
      box-shadow: 0px 0px 3px 0px ${props => props.color};
    }
  }

  & input.transition {
    opacity: 0;
  }

  & textarea {
    height: 10rem !important;
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