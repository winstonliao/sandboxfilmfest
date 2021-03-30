import React, { Component } from "react"
import styled from "styled-components"
import { sendForm } from "../components/sendForm"

import SingleLayout from "../components/singleLayout"
import Input from "../components/input"
import Button from "../components/button"
import Modal from "../components/modal"
import MessageBox from "../components/messageBox"

class ContactSection extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      message: "",
      showModal: false,
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.modalHandler = this.modalHandler.bind(this)
  }

  changeHandler(event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }

  submitHandler() {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSesqh33eZPQtTMoaKgAlpnjTaFQkPXS-xvp7TLDztdeKWEsrQ/viewform",
      "_blank"
    )
  }

  modalHandler() {
    this.setState(state => ({
      showModal: !state.showModal,
    }))
    setTimeout(() => {
      document.body.style.overflowY = this.state.showModal ? "hidden" : "scroll"
    }, 500)
  }

  render() {
    return (
      <StyledContactSection id={this.props.id}>
        <SingleLayout>
          <p className="title">CONTACT</p>
          <p className="desc">
            Got feedback or questions? Reach out to us directly with this form,
            and we'll get back to you as soon as we can.
          </p>
          <Button
            name="CONTACT"
            color="var(--black)"
            bgColor="var(--white)"
            onClick={this.submitHandler}
          ></Button>
        </SingleLayout>
        <Modal
          showModal={this.state.showModal}
          clickHandler={this.modalHandler}
        >
          <MessageBox
            headline="Thanks!"
            message="We've received your message. We'll get back to you as soon as we can."
          ></MessageBox>
        </Modal>
      </StyledContactSection>
    )
  }
}

const StyledContactSection = styled.div`
  color: var(--black);
  background-color: var(--white);

  & > div {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  & .title {
    text-align: center;
    font-family: var(--display-font);
    font-weight: var(--display-weight);
    font-size: var(--display);
    margin-bottom: 4rem;
  }

  & textarea {
    resize: vertical;
  }

  @media (max-width: 767.98px) {
    & .title {
      font-size: var(--display);
      line-height: 1rem;
    }

    & .desc {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`

export default ContactSection
