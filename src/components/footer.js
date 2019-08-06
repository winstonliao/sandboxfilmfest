import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <span>© {{siteTitle}} &nbsp;{new Date().getFullYear()}</span>
  </StyledFooter>
)

const StyledFooter = styled.footer`
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Footer
