import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import SplitLayout from '../components/splitLayout'
import Carousel from '../components/carousel'
import FilmItem from '../components/filmItem'
import Modal from '../components/modal'
import LightBox from '../components/lightBox'

class WatchSection extends Component {

  constructor() {
    super();
    this.state = {
      year: 2019,
      film: films[0],
      showModal: false,
    };
    this.modalHandler = this.modalHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.year2019 = React.createRef();
    this.year2018 = React.createRef();
    this.carousel = React.createRef();
    this.filmRefs = films.reduce( (acc, film, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});
  }

  // componentDidMount() {
  //   this.carousel.addEventListener("scroll", this.scrollHandler);
  // }

  // componentWillUnmount() {
  //   this.carousel.removeEventListener("scroll", this.scrollHandler);
  // }

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

  scrollHandler() {
    console.log('scroll');

    let yearPos = {};
    Array.from(this.carousel.current.props.children).reverse().map( (film, i) => {
      yearPos[film.year] = ReactDOM.findDOMNode(this.filmRefs[i].current).offsetTop;
    });

    console.log(this.carousel.offsetTop);
    console.log(yearPos);

    yearPos.keys().map(Number).forEach( year => {
      if(this.carousel.scrollTop >= yearPos[year]) {
        this.setState(state => ({
          year: year,
        }));
        return;
      }
    });
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
              <span className={this.state.year === 2019 ? 'underline' : ''} ref={this.year2019} onClick={ () => this.yearHandler(2019) }>2019</span>
              <span className={this.state.year === 2018 ? 'underline' : ''} ref={this.year2018} onClick={ () => this.yearHandler(2018) }>2018</span>
            </div>
          }
          right={
            <div className='carousel-wrapper'>
              <Carousel ref={this.carousel} isLight={true} onScroll={ this.scrollHandler }>
                {films.map((film, i) => (
                  <FilmItem key={i} ref={this.filmRefs[i]} {...film} onClick={ () => this.modalHandler(film) }></FilmItem>
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
      position: relative;
      margin-right: auto;
			line-height: 6rem;
      text-decoration: none;

			color: var(--black);
      font-family: var(--display-font);
      font-weight: var(--display-weight);
      font-size: var(--display);

      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        height: 0;
        left: 0;
        bottom: -8px;
        width: 0;
        border-bottom: solid 8px var(--yellow);
        transition: width ease-in-out 0.2s;
      }

      &.underline:before {
        width: 100%;
      }
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