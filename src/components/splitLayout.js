import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const SplitLayout = ({left, right}) => (
	<StyledSplitLayout>
    <div class='left'>
      { left }
    </div>
    <div class='right'>
      { right }
    </div>
	</StyledSplitLayout>
)

const StyledSplitLayout = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  height: 100vh;
  width: 100vw;

  & > div > div {
    height: 100%;
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media (max-width: 1399.98px) {
  }

  @media (max-width: 1136.98px) {
    & > div > div {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }

  @media (max-width: 1024px) {
    display: block;
    height: auto;

    & > div:first-child > div {
        padding-bottom: 0;
      }

    & > div > div {
      height: auto;
      padding: 10rem 20rem;
    }
  }

  @media (max-width: 936.98px) {
    & > div > div {
      padding: 10rem 15rem;
    }
  }

  @media (max-width: 767.98px) {
    & > div > div {
      padding: 10rem 10rem;
    }
  }

  @media (max-width: 575.98px) {
    & > div > div {
      padding: 10rem 5rem;
    } 
  }
`

SplitLayout.propTypes = {
}

SplitLayout.defaultProps = {
}

export default SplitLayout