import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <span>© {siteTitle.toUpperCase()}&nbsp;{new Date().getFullYear()}</span>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  height: 40vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--black);
  color: var(--white);
`

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
