import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const ParagraphCustom = ({ title, children }) => (
  <StyledParagraphCustom>
    <p className="title">{title.toUpperCase()}</p>
    {children}
  </StyledParagraphCustom>
)

const StyledParagraphCustom = styled.div`
  margin-bottom: 2.5rem;

  & .title {
    font-size: var(--large);
    font-weight: var(--heavy-weight);
  }

  p:not(.title) {
    font-size: var(--small);
    font-weight: var(--medium-weight);
    line-height: 1rem;
  }

  @media (max-width: 1080px) {
    p:not(.title) {
      line-height: 1rem;
    }
  }

  @media (max-width: 767.98px) {
    p:not(.title) {
      line-height: 1.25rem;
    }
  }
`

ParagraphCustom.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

ParagraphCustom.defaultProps = {
  title: "",
  text: "",
}

export default ParagraphCustom
