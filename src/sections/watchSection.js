import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import SplitLayout from '../components/splitLayout'
import Carousel from '../components/carousel'
import FilmItem from '../components/filmItem'
import Modal from '../components/modal'
import LightBox from '../components/lightBox'

class watchSection extends Component {

  constructor() {
    super();
    this.state = {
      year: '',
      film: films[0],
      showModal: false,
    };
    this.modalHandler = this.modalHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.year2019 = React.createRef();
    this.year2018 = React.createRef();
    this.carousel = React.createRef();
    this.filmRefs = films.reduce( (acc, film, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});
  }

  componentDidMount() {
    this.setState(state => ({
      year: '2019',
    }))
  }

  modalHandler(film) {
    this.setState(state => ({
      showModal: !state.showModal,
      film: film,
      })
    );
    this.toggleScroll();
  }

  clickHandler() {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
    this.toggleScroll();
  }

  yearHandler(year) {
    const index = Array.from(this.carousel.current.props.children).findIndex( film => film.props.year == year );
    ReactDOM.findDOMNode(this.filmRefs[index].current).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  toggleScroll() {
    setTimeout(() => {
      document.body.style.overflowY = this.state.showModal ? 'hidden' : 'scroll';
    }, 500);
  }

	render() {
    return(
			<StyledwatchSection id={this.props.id}>
        <SplitLayout
          left={
            <div className='title-wrapper'>
              <span>WATCH</span>
              <span className={this.state.year == 2019 ? 'underline' : ''} ref={this.year2019} onClick={ () => this.yearHandler(2019) }>2019</span>
              <span className={this.state.year == 2018 ? 'underline' : ''} ref={this.year2018} onClick={ () => this.yearHandler(2018) }>2018</span>
            </div>
          }
          right={
            <div className='carousel-wrapper'>
              <Carousel ref={this.carousel} isLight={true}>
                {films.map((film, i) => (
                  <FilmItem key={i} ref={this.filmRefs[i]} {...film} onClick={ () => this.modalHandler(film) }></FilmItem>
                ))}
              </Carousel>
            </div>
          }
        >
        </SplitLayout>
        <Modal showModal={this.state.showModal} clickHandler={this.clickHandler}>
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
      text-decoration: none;

			color: var(--black);
      font-family: var(--display-font);
      font-weight: var(--display-weight);
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
    year: 2018,
    video: 'https://www.youtube.com/embed/YlBkoGocaQo',
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