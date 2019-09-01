import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const FilmItem = ({ image, title }) => (
	<StyledFilmItem>
    <span>{ title.toUpperCase() }</span>
	</StyledFilmItem>
)

const StyledFilmItem = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20rem;
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
}

FilmItem.defaultProps = {
}

export default FilmItem