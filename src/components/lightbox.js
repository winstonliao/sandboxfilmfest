import React, { Component } from 'react'
import styled from 'styled-components'

class LightBox extends Component {
  constructor(props) {
    super(props);
  }

	render() {
    return(
			<StyledLightBox>
        <div className='lightbox'>
          <div className='video'>
            <iframe>{ this.props.video }</iframe>
          </div>
          <div className='main-info'>
            <p className='title'>{ this.props.title }</p >
            <p className='logline'>{ this.props.logline }</p>
          </div>
          <div className='desc'>
            <div className='category'>
              <p>Created by</p>
              {Array.from(this.props.creators).map((creator, i) => (
                <p key={i}>{ creator }</p>
              ))}
            </div>
            <div className='category'>
              <p>Starring</p>
              {Array.from(this.props.actors).map((actor, i) => (
                <p key={i}>{ actor }</p>
              ))}
            </div>
            <div className='category'>
              <p>Awards</p>
              {Array.from(this.props.awards).map((award, i) => (
                <p key={i}>{ award }</p>
              ))}
            </div>
            <div className='category'>
              <p>Prompts</p>
              {Array.from(this.props.prompts).map((prompt, i) => (
              [<span className='prompt'>{ prompt.type }:</span>,
              <span>{ prompt.text }</span>,]
            ))}
            </div>
          </div>
        </div>
			</StyledLightBox>
		)
	}
}

const StyledLightBox = styled.div`

  & .lightbox {
    height: 30rem;
    width: 60rem;

    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: 
      'video desc'
      'main-info desc'
  }

  & .video {
    grid-area: video;
    background-color: var(--black);
  }

  & .main-info {
    grid-area: main-info;
    padding: 2rem;

    color: var(--white);
    background-color: var(--black);

    & .title {
      font-family: var(--display-font);
      font-size: var(--larger);
    }

    & .logline {
      margin-bottom: 0;
      line-height: 1rem;
      font-family: var(--main-font);
      font-size: var(--small);
    }
  }

  & .desc {
    overflow-y: scroll;
    padding: 2rem;
    grid-area: desc;
    background-color: var(--white);
    
    & .category {
      margin-bottom: 1rem;

      & p {
        margin-bottom: 0;
        font-size: var(--small);
        line-height: 1rem;
      }

      & p:first-child {
        font-size: var(--medium);
        font-weight: var(--heavy-weight);
        margin-bottom: 0.5rem;
      }

      & .prompt {
        font-weight: var(--heavy-weight);
      }
    }
  }
`

export default LightBox