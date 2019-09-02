import React, { Component } from 'react'
import styled from 'styled-components'

import SplitLayout from '../components/splitLayout'
import Carousel from '../components/carousel'
import FilmItem from '../components/filmItem'
import Year from '../components/year'

class watchSection extends Component {

  constructor() {
    super();
    this.state = {
      year: '',
    };
    this.year2019 = React.createRef();
    this.year2018 = React.createRef();
  }

  componentDidMount() {
    this.setState(state => ({
      year: '2019',
    }))
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
                  <FilmItem key={i} {...film}></FilmItem>
                ))}
              </Carousel>
            </div>
          }
        >
        </SplitLayout>
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
  },
  {
    title: 'Interference Patterns',
    image: '',
  },
  {
    title: 'Firestruck',
    image: '',
  },
]


export default watchSection