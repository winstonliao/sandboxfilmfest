import React, { Component } from 'react'
import styled from 'styled-components'

class Hero extends Component {

  constructor() {
    super();
    this.state = {
      action: '',
      actions: ['WRITE', 'SHOOT', 'DIRECT', 'EDIT'],
    };
  }

  componentDidMount() {
    this.changeAction(0);
  }

  changeAction(index) {
    setTimeout(() => {
      this.setState(state => ({
        action: state.actions[index%4],
      }))
      this.changeAction(index+1);
    }, 1500)
  }

	render() {
    return(
			<StyledHero id={this.props.id}>
        <div className='text'>
          <p className='subtitle'>STANFORD UNIVERSITY'S</p>
          <p className='title'>SANDBOX FILM FEST</p>
          <div>
            <div className='actionOuter'><span className='actionInner'>{this.state.action}</span></div>
            <span className='actionAfter'>&nbsp;A MOVIE IN 48 HOURS</span>
          </div>
        </div>
			</StyledHero>
		)
	}
}

const StyledHero = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding-top: 50vh;
  padding-left: 15vw;

  & .text {
    display: inline;    

    & span {
      font-size: var(--larger);
      font-weight: var(--heavy-weight);
    }

    & .subtitle {
      margin-bottom: 2rem;
      padding-left: 0.25rem;

      font-size: var(--medium);
      font-weight: var(--medium-weight);
    }

    & .title {
      margin-bottom: 5rem;

      font-family: var(--display-font);
      font-size: var(--display);
    }

    & .actionOuter {
      display: inline-block;
      height: 1.75rem;
    }

    & .actionInner {
      border-bottom: solid 4px var(--yellow);
    }
  }
`

export default Hero