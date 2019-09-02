import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const FilmItem = ({ image, title }) => (
	<StyledFilmItem image={image}>
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
}

FilmItem.defaultProps = {
  title: '',
  image: '',
}

export default FilmItem