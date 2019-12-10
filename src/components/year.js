import React, { Component } from 'react'
import styled from 'styled-components'

const Year = ({ selected, year, percent, onClick }) => (
  <StyledYear className={selected ? 'underline' : ''} percent={percent} onClick={onClick}>
    {year}
  </StyledYear>
)

const StyledYear = styled.span`
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    height: 8px;
    left: 0;
    bottom: -8px;
    width: 0;
    background-color: var(--yellow);
    transition: width ease-in-out 0.5s;
  }

  &.underline:before {
    width: ${props => props.percent};
  }

  @media (max-width: 767.98px) {
    & :before {
      height: 6px;
      bottom: -6px;
    }
  }
`

export default Year