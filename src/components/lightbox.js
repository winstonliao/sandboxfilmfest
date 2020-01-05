import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const LightBox = ({ title, year, logline, video, creators, actors, awards, prompts }) => (
  <StyledLightBox>
    <div className='lightbox'>
      <div className='video'>
        <div class='embed-container'>
          <iframe src={ video } frameborder='0' allowFullScreen></iframe>
        </div>
      </div>
      <div className='main-info'>
        <p className='title'>{ title.toUpperCase() } <span>{ year }</span></p>
        <p className='logline'>{ logline }</p>
      </div>
      <div className='desc'>
        <div className='category' id='creators'>
          <p>CREATED BY</p>
          {Array.from(creators).map((creator, i) => (
            <p key={i}>{ creator }</p>
          ))}
        </div>
        <div className='category' id='actors'>
          <p>STARRING</p>
          {Array.from(actors).map((actor, i) => (
            <p key={i}>{ actor }</p>
          ))}
        </div>
        {awards.length > 0 && 
          <div className='category' id='awards'>
            <p>AWARDS 🏆</p>
            {Array.from(awards).map((award, i) => (
              <p key={i}>{ award }</p>
            ))}
          </div>
        }
        <div className='category' id='prompts'>
          <p>PROMPTS</p>
          {Object.keys(prompts).map((prompt, i) => (
            <p className='prompt'>
              <span>{ prompt.charAt(0).toUpperCase() + prompt.slice(1) }: </span>
              <span>{ prompts[prompt].charAt(0).toUpperCase() + prompts[prompt].slice(1) }</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  </StyledLightBox>
)

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

  & .embed-container { 
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; 
    overflow: hidden; 
    max-width: 100%; 
  } 
  
  & .embed-container iframe, .embed-container object, .embed-container embed { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
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
      font-weight: var(--display-weight);
      font-size: var(--larger);

      & > span {
        font-style: italic;
        font-weight: var(--light-weight);
      }
    }

    & .logline {
      margin-bottom: 0;
      line-height: 1rem;
      font-family: var(--main-font);
      font-size: var(--small);
    }
  }

  & .desc {
    padding: 2rem;
    grid-area: desc;
    background-color: var(--white);
    
    & .category {
      margin-bottom: 1.5rem;

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
        margin-bottom: 0.5rem;

        & > span:first-child {
          font-weight: var(--heavy-weight);
        }
      }
    }
  }

  @media (max-width: 1080px) {
    & .lightbox {
      height: auto;
      width: 75vw;

      display: flex;
      grid-template-rows: auto;
      flex-direction: column;
    }

    & .main-info {
      color: var(--black);
      background-color: var(--white);
      padding-bottom: 0;

      & .title {
        line-height: 2.5rem;
      }
    }

    & .desc {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 
        'creators actors'
        'prompts awards'
    }

    & #creators {
      grid-area: 'creators';
    }

    & #actors {
      grid-area: 'actors';
    }

    & #prompts {
      grid-area: 'prompts';
      margin-bottom: 0;
    }

    & #awards {
      grid-area: 'awards';
      margin-bottom: 0;
    }
  }

  @media (max-width: 413px) {
    & .lightbox {
      max-height: 75vh;
    }

    & .main-info {
      padding: 2rem;
      
      & .logline {
        line-height: inherit;
      }
    }

    & .desc {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      padding: 0;
      margin: 2rem;
      margin-top: 0;

      & .category p {
        line-height: inherit;
      }
    }

    & #awards {
      margin-bottom: 1.5rem;
    }
  }
`

LightBox.propTypes = {
  title: PropTypes.string,
  logline: PropTypes.string,
  video: PropTypes.string,
  creators: PropTypes.array,
  actors: PropTypes.array,
  awards: PropTypes.array,
  prompts: PropTypes.object,
}

LightBox.defaultProps = {
  title: '',
  logline: '',
  video: '',
  creators: [],
  actors: [],
  awards: [],
  prompts: {},
}

export default LightBox