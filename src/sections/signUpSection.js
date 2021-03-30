import React, { Component } from "react"
import styled from "styled-components"
import { sendForm } from "../components/sendForm"

import SingleLayout from "../components/singleLayout"
import Input from "../components/input"
import Button from "../components/button"
import Modal from "../components/modal"
import MessageBox from "../components/messageBox"

class SignUpSection extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
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
      "https://docs.google.com/forms/d/e/1FAIpQLSdXYy989DPzPOVfIBYQj4OgqlS69vKTWTRV1br7rih9KsB9cg/viewform",
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
      <StyledSignUpSection id={this.props.id}>
        <SingleLayout>
          <p className="title">SUBSCRIBE</p>
          <p className="desc">
            We are planning even more events in the future. Please sign up below
            to be added to our mailing list so you can get announcements sent
            directly to your inbox!
          </p>
          <Button
            name="SUBSCRIBE"
            color="var(--white)"
            bgColor="var(--black)"
            onClick={this.submitHandler}
          ></Button>
        </SingleLayout>
        <Modal
          showModal={this.state.showModal}
          clickHandler={this.modalHandler}
        >
          <MessageBox
            headline="Thanks!"
            message="You have been added to our mailing list."
          ></MessageBox>
        </Modal>
      </StyledSignUpSection>
    )
  }
}

const StyledSignUpSection = styled.div`
  color: var(--white);
  background-color: var(--black);

  & > div {
    height: 100vh;
  }

  & .title {
    text-align: center;
    font-family: var(--display-font);
    font-weight: var(--display-weight);
    font-size: var(--display);
    margin-bottom: 4rem;
  }

  @media (max-width: 1023.98px) {
    & > div {
      height: auto;
    }
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

export default SignUpSection
