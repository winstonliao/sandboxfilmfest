import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import logo from '../images/logo.png'

class Header extends Component {

  constructor() {
    super();
    this.state = {
      showMobileNav: false,
    };
    this.hamburgerHandler = this.hamburgerHandler.bind(this);
  }

  hamburgerHandler() {
    this.setState(state => ({
      showMobileNav: !state.showMobileNav,
    }));
    setTimeout(() => {
      document.body.style.overflowY = this.state.showMobileNav ? 'hidden' : 'scroll';
    }, 500);
  }

  render() {
    return(
      <StyledHeader>
        <div class='left'>
          <Link to='/#hero'>
            <img src={logo} alt='logo' className='logo'></img>
            <p className='title'>SANDBOX <MediaQuery query="(max-width: 374.98px)"><br></br></MediaQuery>FILM FEST</p>
          </Link>
        </div>

        <div class='right'>
          <MediaQuery query="(min-width: 1024.02px)">      
            <nav>
              <Link to='/#how_it_works'>HOW IT WORKS</Link>
              <Link to='/#watch'>WATCH</Link>
              <Link to='/#event'>WINTER 2020</Link>
              <Link to='/#sign_up'>SUBSCRIBE</Link>
              <Link to='/#about'>ABOUT</Link>
              <Link to='/#contact'>CONTACT</Link>
            </nav>
          </MediaQuery>

          <MediaQuery query="(max-width: 1024px)">
            <div className='mobile-nav'>
              <div className='nav-item dropdown'>
                <p className='nav-title hamburger' onClick={this.hamburgerHandler}>{this.state.showMobileNav ? '✕' : '☰' }</p> 
                <nav onClick={this.hamburgerHandler} className={this.state.showMobileNav ? 'show' : ''}>
                  <Link to='/#how_it_works'>HOW IT WORKS</Link>
                  <Link to='/#watch'>WATCH</Link>
                  <Link to='/#event'>WINTER 2020</Link>
                  <Link to='/#sign_up'>SUBSCRIBE</Link>
                  <Link to='/#about'>ABOUT</Link>
                  <Link to='/#contact'>CONTACT</Link>
                </nav>
                <div className='cover'></div>
              </div>
            </div>
          </MediaQuery>
        </div>
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.header`
  z-index: 10;
  height: 4rem;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--black);
  color: var(--white);
  font-weight: var(--medium-weight);

  & div {
    padding: 0 2rem;
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

  & .mobile-nav {
    display: flex;
    text-align: left;
    font-size: var(--large);

    margin: 0;
    padding: 0;

    & .nav-item {
      padding: 0;
    }

    & p {
      margin: 0;
    }

    & nav {
      position: absolute;
      top: 6rem;
      right: 0;
      margin: 0;
      height: 100vh;
      transform: translateX(100%);
      background-color: var(--black);

      transition: transform 0.3s ease-in-out;

      & a {
        display: block;
        margin: 1rem;
        width: auto;
        padding: 2rem 4rem 2rem 2rem;
        cursor: pointer;

        font-size: 1.5rem;

        &:last-child {
          padding: 2rem 4rem 2rem 2rem;
        }
      }

      &.show {
        transform: translateX(0%);

        -webkit-box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.3);
      }
    }

    & .cover {
      position: absolute;
      right: 0;
      width: 100vw;
    }
  }

  @media (max-width: 1024px) {
    height: 6rem;
    
    & a {
      padding: 0;
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
