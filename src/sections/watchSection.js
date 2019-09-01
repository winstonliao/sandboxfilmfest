import React, { Component } from 'react'
import styled from 'styled-components'

import SplitLayout from '../components/splitLayout'
import Carousel from '../components/carousel'
import FilmItem from '../components/filmItem'


class watchSection extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

	render() {
    return(
			<StyledwatchSection>
        <SplitLayout
          left={
            <div className='title-wrapper'>
              <span className='title'>WATCH</span>
              <span className='title'>2019</span>
              <span className='title'>2018</span>
            </div>
          }
          right={
            <div className='carousel-wrapper'>
              <Carousel>
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

		& .title {
			padding-left: 10rem;
			line-height: 6rem;

			color: var(--black);
			font-family: var(--display-font);
			font-size: var(--display);
		}
	}

  & .carousel-wrapper {
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