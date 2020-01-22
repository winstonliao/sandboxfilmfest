import React, { Component } from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

class Hero extends Component {

  constructor() {
    super();
    this.state = {
      actions: ['WRITE', 'SHOOT', 'DIRECT', 'EDIT'],
      action: 'WRITE',
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
          <p className='title'>SANDBOX <MediaQuery query="(max-width: 1023.98px)"><br></br></MediaQuery>FILM FEST</p>
          <div className='action'>
            <div className='actionOuter'><span className='actionInner'>{this.state.action}</span></div>
            <span className='actionAfter'>&nbsp;A MOVIE <MediaQuery query="(max-width: 767.98px)"><br></br></MediaQuery> IN 48 HOURS</span>
          </div>
          {/* <p className='date'>JANUARY 17 - 19, 2020</p> */}
        </div>
        <div className='opacity'></div>
			</StyledHero>
		)
	}
}

const StyledHero = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding-top: 50vh;
  padding-left: 15vw;

  background-image: url('../images/film.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: none;

  & .opacity {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: white;
    opacity: 0.85;
  }

  & .text {
    position: absolute;
    z-index: 2;
    display: inline;    

    & span {
      font-size: var(--larger);
      font-weight: var(--heavy-weight);
    }

    & .subtitle {
      margin-bottom: 0;
      padding-left: 0.25rem;

      font-size: var(--medium);
      font-weight: var(--medium-weight);
    }

    & .title {
      margin-bottom: 3rem;
      line-height: 4rem;

      font-family: var(--display-font);
      font-weight: var(--display-weight);
      font-size: var(--display);
    }

    & .actionOuter {
      display: inline-block;
      height: 1.75rem;
    }

    & .actionInner {
      border-bottom: solid 6px var(--yellow);
    }

    & .actionAfter {
      line-height: 3.5rem;
    }

    & .date {
      margin-top: 1rem;
      font-size: var(--large);
    }
  }

  @media (max-width: 767.98px) {
    & .text {
      & .title {
        font-size: var(--display);
        line-height: 4rem;
      }
      
      & .actionInner {
        border-bottom: solid 4px var(--yellow);
      }

      & .action {
        font-size: 0.75rem;

        & .actionAfter {
          line-height: 2.5rem;
        }
      }

      & .date {
        font-size: var(--medium);
      }
    }
  }

  @media (max-width: 413.98px) {
    padding-left: 3rem;

    & .text {

      & .title {
        margin-bottom: 1.5rem;
        line-height: 4rem;
      }
    
      & > div {
        font-size: var(--small);
      }

      & .actionAfter {
        line-height: 2.75rem;
      }
    }
  }
`

export default Hero