import React, { Component } from 'react'
import styled from 'styled-components'

import SingleLayout from '../components/singleLayout'
import Input from '../components/input'
import Button from '../components/button'
import Modal from '../components/modal'

class SignUpSection extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
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
      email: this.state.email,
    }
    this.sendForm(form).then(() => {
      this.setState({
        email: '',
      });
      this.modalHandler();
    }).catch(response => {
      console.log(response);
      if (response.responseJSON && response.responseJSON.errors) {
        alert("An error has occurred with submitting your email. Please try again.");
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
			<StyledSignUpSection>
				<SingleLayout>
					<p className='title'>SIGN UP</p>
					<p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<Input name='email' label='EMAIL' placeholder='Email Address' color='var(--white)' isLong={ false }></Input>
					<Button name='SUBMIT' color='var(--white)' bgColor='var(--yellow)' onClick={ this.submitHandler }></Button>
				</SingleLayout>
				<Modal showModal={this.state.showModal} clickHandler={this.modalHandler}>
          <h2>Thanks!</h2>
          <p>You have been successfully added to our mailing list. Keep an eye out for future announcements.</p>
        </Modal>
			</StyledSignUpSection>
		)
	}
}

const StyledSignUpSection = styled.div`

	color: var(--white);
	background-color: var(--yellow);

	& > div {
		height: 100vh;
	}

	& .title {
		text-align: center;
		font-family: var(--display-font);
		font-size: var(--display);
		margin-bottom: 4rem;
	}
`

export default SignUpSection