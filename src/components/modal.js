import PropTypes from "prop-types"
import React, {Component} from 'react'
import styled from 'styled-components'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler= event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }

  render() {
    return (
      <StyledModal>
        <div className={this.props.showModal ? 'overlay active' : 'overlay'} onClick={this.props.clickHandler}>
          <div className='modal' onClick={this.clickHandler}>
            <a id='x' onClick={this.props.clickHandler}>x</a>
            {this.props.children}
          </div>
        </div>
      </StyledModal>
    )
  }
}

const StyledModal = styled.div`
  position: fixed;

  & .overlay {
    height: 0;
    padding: 0;
    margin: 0;

    visibility: visible;
    transition: visibility ease-in-out 0.3s;

    & * {
      visibility: hidden;
    }

    &.active {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      
      background-color: rgba(0, 0, 0, 0.25);
      visibility: visible;

      & * {
        visibility: visible;
      }

      & .modal {
        position: absolute;
        width: 30rem;
        padding: 4rem;
        text-align: center;
        opacity: 1;

        background-color: var(--white);
        color: var(--black);

        -webkit-box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.3);

        & #x {
          position: absolute;
          top: 1rem;
          right: 1rem;
          line-height: var(--small);
          cursor: pointer;
        }

        & > p:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (max-width: 767.98px) {

    & .overlay.active .modal {
      width: 90%;
      max-width: 30rem;
    }
  }

  @media (max-width: 349.98px) {

    & .overlay.active .modal {
      padding: 2rem;
      padding-top: 3rem;
    }
  }
`

Modal.propTypes = {
  showModal: PropTypes.bool,
}

Modal.defaultProps = {
  showModal: false,
}

export default Modal