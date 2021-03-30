import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import SplitLayout from "../components/splitLayout"
import Paragraph from "../components/paragraph"
import ParagraphCustom from "../components/paragraphCustom"
import ParagraphContainer from "../components/paragraphContainer"

const AwardsSection = ({ id }) => (
  <StyledAwardsSection id={id}>
    <SplitLayout
      left={
        <div className="title-wrapper">
          <p className="title">
            SPRING
            <br />
            AWARDS
          </p>
        </div>
      }
      right={
        <ParagraphContainer>
          {paragraphs.map((paragraph, i) => (
            <Paragraph key={i} {...paragraph}></Paragraph>
          ))}
          <ParagraphCustom title="Special Awards">
            <p>
              <strong>Remote Collaboration:</strong> Films that are set in at
              least two separate households with their own sets of actors
              <br />
              <br />
              <strong>Free Solo:</strong> For movies filmed and crewed by a
              single person
            </p>
          </ParagraphCustom>
        </ParagraphContainer>
      }
    ></SplitLayout>
  </StyledAwardsSection>
)

const paragraphs = [
  {
    title: "Classic Awards",
    text: "Sand d'Or, Best Actress, Best Actor, Best Cinematography",
  },
]

const StyledAwardsSection = styled.div`
  & .title-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    & .title {
      line-height: 6rem;

      color: var(--black);
      font-family: var(--display-font);
      font-weight: var(--display-weight);
      font-size: var(--display);
    }
  }

  @media (max-width: 1080px) {
    & .title-wrapper {
      background-color: var(--black);
      border: none;

      & .title {
        color: var(--white);
      }
    }
  }

  @media (max-width: 768px) {
    & .title-wrapper .title {
      font-size: var(--display);
      line-height: 4rem;
    }
  }
`

AwardsSection.propTypes = {}

AwardsSection.defaultProps = {}

export default AwardsSection
