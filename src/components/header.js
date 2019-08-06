import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div class='left'>
      <img class='logo' src=''></img>
      <span>{siteTitle}</span>
    </div>
    <div class='right'>
      <nav>
        <Link to='#'></Link>
        <Link to='#'></Link>
        <Link to='#'></Link>
        <Link to='#'></Link>
        <Link to='#'></Link>
      </nav>
    </div>
  </StyledHeader>
)

const StyledHeader = styled.header`
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
