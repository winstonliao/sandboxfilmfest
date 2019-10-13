import React, { Component } from 'react'
import styled from 'styled-components'

import SingleLayout from '../components/singleLayout'
import Input from '../components/input'
import Button from '../components/button'
import Modal from '../components/modal'
import MessageBox from '../components/messageBox'

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
			<StyledSignUpSection id={this.props.id}>
				<SingleLayout>
					<p className='title'>SIGN UP</p>
					<p className='desc'>We are planning more events in the future, most likely in early 2020. Please sign up below to be added to our mailing list so you can get announcements sent directly to your inbox!</p>
					<Input name='email' label='EMAIL' placeholder='Email Address' color='var(--white)' isLong={ false }></Input>
					<Button name='SUBMIT' color='var(--white)' bgColor='var(--yellow)' onClick={ this.submitHandler }></Button>
				</SingleLayout>
				<Modal showModal={this.state.showModal} clickHandler={this.modalHandler}>
          <MessageBox headline='Thanks!' message='You have been added to our mailing list.'></MessageBox>
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
      font-size: 4rem;
      line-height: 1rem;
    }

    & .desc {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`

export default SignUpSection