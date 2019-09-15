import React, { Component } from 'react'
import styled from 'styled-components'

import SplitLayout from '../components/splitLayout'
import Carousel from '../components/carousel'
import FilmItem from '../components/filmItem'
import Year from '../components/year'
import Modal from '../components/modal'
import LightBox from '../components/lightbox'

class watchSection extends Component {

  constructor() {
    super();
    this.state = {
      year: '',
      film: films[0],
      showModal: false,
    };
    this.modalHandler = this.modalHandler.bind(this);
    this.year2019 = React.createRef();
    this.year2018 = React.createRef();
  }

  componentDidMount() {
    this.setState(state => ({
      year: '2019',
    }))
  }

  modalHandler(film) {
    console.log(film)
    this.setState(state => ({
      showModal: !state.showModal,
      film: film,
      })
    );
    setTimeout(() => {
      document.body.style.overflowY = this.state.showModal ? 'hidden' : 'scroll';
    }, 500);
  }

	render() {
    return(
			<StyledwatchSection>
        <SplitLayout
          left={
            <div className='title-wrapper'>
              <span>WATCH</span>
              <Year year={2019} targetYear={this.state.year} ref={this.year2019}></Year>
              <Year year={2018} targetYear={this.state.year} ref={this.year2018}></Year>
            </div>
          }
          right={
            <div className='carousel-wrapper'>
              <Carousel isLight={true}>
                {films.map((film, i) => (
                  <FilmItem key={i} {...film} onClick={ () => this.modalHandler(film) }></FilmItem>
                ))}
              </Carousel>
            </div>
          }
        >
        </SplitLayout>
        <Modal showModal={this.state.showModal}>
          <LightBox {...this.state.film}></LightBox>
        </Modal>
			</StyledwatchSection>
		)
	}
}

const StyledwatchSection = styled.div`
	& .title-wrapper {
    display: flex;
    flex-direction: column;
		justify-content: center;
		height: 100%;

		& > span {
      margin-right: auto;
			margin-left: 10rem;
			line-height: 6rem;

			color: var(--black);
			font-family: var(--display-font);
			font-size: var(--display);
		}

    & .underline {
      border-bottom: solid 8px var(--yellow);
    }
	}

  & .carousel-wrapper {
    height: 100vh;
    padding: 10rem 5rem 10rem 0;
  }
`

const films = [
  {
    title: 'Circulation',
    image: '',
    year: 2019,
    video: '',
    logline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    awards: [],
    creators: [],
    actors: [],
    prompts: {
      image: '',
      quote: '',
      autocomplete: '',
    }
  },
  {
    title: 'Interference Patterns',
    image: '',
    year: 2019,
    video: '',
    logline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    awards: [],
    creators: [],
    actors: [],
    prompts: {
      image: '',
      quote: '',
      autocomplete: '',
    }
  },
  {
    title: 'Firestruck',
    image: '',
    year: 2019,
    video: '',
    logline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    awards: ['Best Screenplay'],
    creators: ['Winston Liao', 'Robert Muni', 'Kati Uyemura', 'Erika DePalatis'],
    actors: ['Kiko Ilagan', 'Katiana Uyemura'],
    prompts: {
      image: 'Lady Gaga at with a long, white flowing gown',
      quote: 'Love is friendship set on fire.',
    }
  },
]


export default watchSection