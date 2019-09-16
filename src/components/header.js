import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import logo from '../images/logo.png'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div class='left'>
      <Link to='/#hero'>
        <img src={logo} alt='logo' className='logo'></img>
        <p className='title'>{siteTitle.toUpperCase()}</p>
      </Link>
    </div>
    
    <div class='right'>
      <nav>
        <Link to='/#how_it_works'>HOW IT WORKS</Link>
        <Link to='/#watch'>WATCH</Link>
        <Link to='/#about'>ABOUT</Link>
        <Link to='/#sign_up'>SIGN UP</Link>
        <Link to='/#contact'>CONTACT</Link>
      </nav>
    </div>
  </StyledHeader>
)

const StyledHeader = styled.header`
  height: 8vh;
  width: 100vw;

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--black);
  color: var(--white);
  font-weight: var(--medium-weight);

  & div {
    padding: 0 3rem;
  }

  & a {
    padding-right: 3rem;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    color: var(--white);
    text-decoration: none;
  }

  & .logo {
    height: 3vh;
    margin: 0;
    padding-right: 1.5rem;
  }

  & .left {
    padding-left: 2rem;
    display: flex;
    align-items: center;

    & .title {
      display: inline;
      margin: 0;

      font-size: var(--medium);
    }
  }

  & .right {
    font-size: var(--small);

    & nav {
      & a:last-child {
        padding: 0;
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
