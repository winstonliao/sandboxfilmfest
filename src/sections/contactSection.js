import React, { Component } from 'react'
import styled from 'styled-components'

import SingleLayout from '../components/singleLayout'
import Input from '../components/input'
import Button from '../components/button'
import Modal from '../components/modal'
import MessageBox from '../components/messageBox'

class ContactSection extends Component {

  constructor() {
    super();
    this.state = {
			name: '',
			email: '',
			message: '',
      showModal: false,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
  }

  changeHandler(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  submitHandler() {
    const form = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message,
    }
    this.sendForm(form).then(() => {
      this.setState({
				name: '',
				email: '',
				message: '',
      });
      this.modalHandler();
    }).catch(response => {
      console.log(response);
      if (response.responseJSON && response.responseJSON.errors) {
        alert("An error has occurred with submitting your message. Please try again.");
      }
    });
  }

  async sendForm(form) {
    // Object.keys(form).forEach(key => {
    //   if(form[key] === ''){
    //     alert('Please fill in your '+key);
    //     const properKey = key.charAt(0).toUpperCase() + key.slice(1);
    //     throw new Error(properKey + ' field is blank.');
    //   }
    // })
    // // Sends a GET to waitlisted to get a users link. We use encodeURIComponent to get proper formatting of special chars.
    // return await $.ajax('https://script.google.com/macros/s/.../exec', {
    //   type: 'GET',
    //   data: form,
    //   headers: {
    //     'Content-Type': 'text/plain;charset=utf-8',
    //   },
    // });
  }

  modalHandler() {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
    setTimeout(() => {
      document.body.style.overflowY = this.state.showModal ? 'hidden' : 'scroll';
    }, 500);
  }

	render() {
    return(
			<StyledContactSection id={this.props.id}>
				<SingleLayout>
					<p className='title'>CONTACT</p>
          <Input name='name' label='NAME' placeholder='Name' color='var(--black)' isLong={ false }></Input>
          <Input name='email' label='EMAIL' placeholder='Email Address' color='var(--black)' isLong={ false }></Input>
          <Input name='message' label='MESSAGE' placeholder='Message' color='var(--black)' isLong={ true }></Input>
					<Button name='SUBMIT' color='var(--black)' bgColor='var(--white)' onClick={ this.submitHandler }></Button>
				</SingleLayout>
				<Modal showModal={this.state.showModal} clickHandler={this.modalHandler}>
          <MessageBox headline='Thanks!' message="We've received your message. We'll get back to you as soon as we can."></MessageBox>
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
		font-size: var(--display);
		margin-bottom: 4rem;
	}
`

export default ContactSection