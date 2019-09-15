import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const FilmItem = ({image, title, year, onClick}) => (
	<StyledFilmItem image={image} year={year} onClick={onClick}>
    <span>{ title.toUpperCase() }</span>
	</StyledFilmItem>
)

const StyledFilmItem = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  overflow: hidden;
  height: 0;
  padding-top: 56.25%;

  cursor: pointer;
  background-image: url('${props => props.image}');
  background-color: var(--black);

  & span {
    display: inline-block;
    margin: 3rem;
    line-height: 2.25rem;

    font-family: var(--display-font);
    font-size: var(--larger);
    color: var(--white);
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