import PropTypes from "prop-types"
import React, {Component} from 'react'
import styled from 'styled-components'

class FilmItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledFilmItem image={this.props.image} id={this.props.year} year={this.props.year} onClick={this.props.onClick}>
        <div class='wrapper'>
          <span>{ this.props.title.toUpperCase() }</span>
        </div>
      </StyledFilmItem>
    )
  }
}

const StyledFilmItem = styled.div`
  cursor: pointer;

  & .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    overflow: hidden;
    height: 0;
    padding-top: 56.25%;
    
    background-image: url('${props => props.image}');
    background-size: cover;
    background-repeat: none;
    background-color: var(--black);

    text-shadow: 0 0 5px var(--black);

    & span {
      display: inline-block;
      margin: 3rem;
      line-height: 2.25rem;

      font-family: var(--display-font);
      font-weight: var(--display-weight);
      font-size: var(--larger);
      color: var(--white);
    }
  }

	@media (max-width: 1024px) {
    & .wrapper { 
      width: 40rem;
    }

    & span {
      white-space: normal;
    }
  }

  @media (max-width: 767.98px) {
    & .wrapper { 
      width: 30rem;
    }
  }

  @media (max-width: 413.98px) {
    & .wrapper { 
      width: 20rem;

      & span {
        margin: 1.5rem 2rem;
        line-height: 1.5rem;
        font-size: var(--medium);
      }
    }
  }
`

FilmItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  year: PropTypes.number,
}

FilmItem.defaultProps = {
  title: '',
  image: '',
  year: 0,
}

export default FilmItem