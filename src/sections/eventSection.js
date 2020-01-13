import React, { Component } from 'react'
import styled from 'styled-components'
import { sendForm } from '../components/sendForm'

import SingleLayout from '../components/singleLayout'
import Input from '../components/input'
import Button from '../components/button'
import Modal from '../components/modal'
import MessageBox from '../components/messageBox'

class EventSection extends Component {

  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler() {
    window.open('https://winston60.typeform.com/to/aTMot4', "_blank");
  }

	render() {
    return(
			<StyledEventSection id={this.props.id}>
				<SingleLayout>
					<p className='title'>WINTER 2020</p>
          <p className='desc info'><strong>Kickoff: </strong>5:00PM - 5:30PM, Jan 17th</p>
          <p className='desc info'><strong>Deadline: </strong>6:00PM, Jan 19th</p>
          <p className='desc info'><strong>Screening: </strong>7:00PM - 8:30PM, Jan 19th</p>
          <p className='desc info last'><strong>Location: </strong>Roble Arts Gym</p>
					<p className='desc'>
            Registration is now open! Sign up as an individual or as a team. You will also be asked to provide prompts for the festival as well.
          </p>
					<Button name='SIGN UP' color='var(--white)' bgColor='var(--yellow)' onClick={ this.submitHandler }></Button>
				</SingleLayout>
			</StyledEventSection>
		)
	}
}

const StyledEventSection = styled.div`

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
    line-height: 4rem;
  }
  
  & .info {
    margin-bottom: 0;

    &.last{
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 1023.98px) {
    & > div {
      height: auto;
    }
  }

  @media (max-width: 767.98px) {
    & .title {
      font-size: var(--display);
    }

    & .desc {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`

export default EventSection