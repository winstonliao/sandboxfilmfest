import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Visibility from 'react-intersection-observer'

import SplitLayout from '../components/splitLayout'
import Carousel from '../components/carousel'
import FilmItem from '../components/filmItem'
import Modal from '../components/modal'
import LightBox from '../components/lightBox'
import Year from '../components/year'

class WatchSection extends Component {

  constructor() {
    super();

    this.state = {
      year: 2019,
      film: films[0],
      percent: '',
      showModal: false,
      container: null,
    };

    this.modalHandler = this.modalHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.visibilityHandler = this.visibilityHandler.bind(this);

    this.year2019 = React.createRef();
    this.year2018 = React.createRef();
    this.carousel = React.createRef();
    this.filmRefs = films.reduce((acc, film, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});
  }

  componentDidMount() {
    this.setState(state => ({
      container: ReactDOM.findDOMNode(this.carousel.current),
      })
    );
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
    const index = Array.from(this.carousel.current.props.children).findIndex( film => film.props.year === year );
    this.setState(state => ({
      year: year,
    }));
    ReactDOM.findDOMNode(this.filmRefs[index].current).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  visibilityHandler(inView, entry) {
    console.log()
    if (inView) {
      const year = parseInt(entry.target.getAttribute('year'));
      const index = parseInt(entry.target.getAttribute('index'));

      const startIndex = films.findIndex(film => film.year === year);
      const endIndex = films.length - films.slice().reverse().findIndex(film => film.year === year) - 1;

      console.log('start: ' + startIndex);
      console.log('end: ' + endIndex);
      console.log('index: ' + index);

      this.setState(state => ({
        percent: 100 * ((index - startIndex + 1) / (endIndex - startIndex + 1)) + '%',
        year: this.state.year == year ? this.state.year : year,
      }));
    }
  }

  toggleScroll() {
    setTimeout(() => {
      document.body.style.overflowY = this.state.showModal ? 'hidden' : 'scroll';
    }, 500);
  }

	render() {
    return(
			<StyledWatchSection id={this.props.id}>
        <SplitLayout
          left={
            <div className='title-wrapper'>
              <span>WATCH</span>
              <Year selected={this.state.year === 2019} year={2019} ref={this.year2019} percent={this.state.percent} onClick={() => this.yearHandler(2019)}></Year>
              <Year selected={this.state.year === 2018} year={2018} ref={this.year2018} percent={this.state.percent} onClick={() => this.yearHandler(2018)}></Year>
            </div>
          }
          right={
            <div className='carousel-wrapper'>
              <Carousel ref={this.carousel} isLight={true}>
                {films.map((film, i) => (
                  <Visibility ref={this.filmRefs[i]} key={i} index={i} year={film.year} root={this.state.container} threshold={0.99} onChange={this.visibilityHandler}>
                    <FilmItem {...film} onClick={ () => this.modalHandler(film) }></FilmItem>
                  </Visibility>
                ))}
              </Carousel>
            </div>
          }
        >
        </SplitLayout>
        <Modal showModal={this.state.showModal} clickHandler={this.clickHandler}>
          {this.state.showModal && <LightBox ref={this.lightBox} {...this.state.film}></LightBox>}
        </Modal>
			</StyledWatchSection>
		)
	}
}

const StyledWatchSection = styled.div`

	& .title-wrapper {
    display: flex;
    flex-direction: column;
		justify-content: center;
		height: 100%;

    & > span {
      width: auto;
      position: relative;
      margin-right: auto;
      line-height: 6rem;
      text-decoration: none;

      color: var(--black);
      font-family: var(--display-font);
      font-weight: var(--display-weight);
      font-size: var(--display);
    }
	}

  & .carousel-wrapper {
    padding: 10rem 5rem 10rem 0;
  }

  @media (max-width: 1424px) {
    & .carousel-wrapper {
      padding: 5rem;
      padding-left: 0;
    }
  }

  @media (max-width: 1080px) {
		& .title-wrapper {
			background-color: var(--white);
		
			& .title, .desc {
				color: var(--black);
			}
		}

    & .carousel-wrapper {
      padding: 10rem 5rem;
      height: auto;
    }
  }

  @media (max-width: 767.98px) {

    & .title-wrapper span {
      font-size: var(--display);
      line-height: 4rem;

      & :before {
        border-bottom: solid 6px var(--yellow);
      }
    }
  }

  @media (max-width: 412.98px) {
    & .carousel-wrapper {
      padding: 10rem 3rem;
    }
  }
`

const films = [
  {
    title: 'Circulation',
    image: '../images/circulation.png',
    year: 2019,
    video: 'https://www.youtube.com/embed/aMn2dewvVwc',
    logline: 'A little anger is good for the heart',
    awards: ['Audience Choice', 'Best Actor', 'Best Editing'],
    creators: ['Jason McRuer', 'Deedee Anderson', 'Jack Seibert'],
    actors: ['Victor Ragsdale'],
    prompts: {
      image: 'A boy staring at a lit candle',
      quote: 'A little anger is good for the heart...the circulation, the skin',
    }
  },
  {
    title: 'Interference Patterns',
    image: '../images/interference_patterns.png',
    year: 2019,
    video: 'https://www.youtube.com/embed/mSl6xigRc1g',
    logline: 'Two friends with dysfunctional communication adventure for a day in a strange, post-apocalyptic world',
    awards: ['Best Actress', 'Best Use of Prompts'],
    creators: ['Jack Virnich', 'Alli Armstrong', 'Nina Zubrilina', 'Carmelle Millar'],
    actors: ['Justine Kaneda', 'Alli Armstrong'],
    prompts: {
      image: "A person's reflection in a toaster",
      quote: "If you're going through hell, keep going",
      autocomplete: 'Hey you can do that it sounds good but I think you can get a lot more fun at this point and I am sure it will if she is the only person I know about it yet lol',
    }
  },
  {
    title: 'Firestruck',
    image: '../images/firestruck.png',
    year: 2019,
    video: 'https://www.youtube.com/embed/YlBkoGocaQo',
    logline: 'A pyromaniac falls in a love with a firefighter',
    awards: ['Best Screenplay'],
    creators: ['Winston Liao', 'Robert Muni', 'Kati Uyemura', 'Erika DePalatis'],
    actors: ['Kiko Ilagan', 'Katiana Uyemura'],
    prompts: {
      image: 'Lady Gaga at a gala with a long, white flowing gown',
      quote: 'Love is friendship set on fire.',
    }
  },
  {
    title: 'Geo',
    image: '../images/geo.png',
    year: 2018,
    video: 'https://www.youtube.com/embed/bIcKHbf4LHM',
    logline: 'Two finalists face off in the ultimate geocaching competition',
    awards: ['Audience Choice', 'Best Actor', 'Best Screenplay'],
    creators: ['Jack Virnich', 'Jason McRuer', 'Winston Liao'],
    actors: ['Victor Ragsdale', 'Justine Kaneda', 'Kiko Ilagan'],
    prompts: {
      image: 'Dishsoap poured onto a waffle',
      quote: "If you love a flower, you don't pick it",
    }
  },
  {
    title: 'My Man',
    image: '../images/my_man.png',
    year: 2018,
    video: 'https://drive.google.com/file/d/1kSgCHSsbFF76yzZxZh89ZN4A4WrI9lO6/preview',
    logline: "You don't have to be admitted to come to Stanford",
    creators: ['Alexander Kucy', 'Chelsea Sidrane', 'Max Drach', 'Harry Schwartz', 'Arnold Wu'],
    actors: ['Max Drach', 'Robert Ehteshamzadeh'],
    prompts: {
      image: 'Beer and cheese on a picnic table by the sea',
      autocomplete: 'Ok, Yes, No',
    }
  },
  {
    title: 'Stanford 48 Hour Film',
    image: '../images/48_hour.png',
    year: 2018,
    video: 'https://www.youtube.com/embed/ooc4x151Wr8',
    logline: 'Film student makes 48 Hour film for Stanford festival',
    creators: ['Maxwell Menzies'],
    actors: ['Maxwell Menzies'],
    awards: ['Most Likely to Inspire a Cult Film', 'Best Use of Prompts'],
    prompts: {
      image: 'Dancers crouched in a line across a stage',
      autocomplete: 'I will be there in the morning to see if you want to come by and see you soon to catch up on the phone with my mom and sister are you free to talk today or tomorrow to get the kids',
    }
  },
]


export default WatchSection