import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import SplitLayout from "../components/splitLayout"
import Paragraph from "../components/paragraph"
import ParagraphContainer from "../components/paragraphContainer"

const HowItWorksSection = ({ id }) => (
  <StyledHowItWorksSection id={id}>
    <SplitLayout
      left={
        <div className="title-wrapper">
          <p className="title">
            HOW<br></br>IT<br></br>WORKS
          </p>
        </div>
      }
      right={
        <ParagraphContainer>
          {paragraphs.map((paragraph, i) => (
            <Paragraph key={i} {...paragraph}></Paragraph>
          ))}
        </ParagraphContainer>
      }
    ></SplitLayout>
  </StyledHowItWorksSection>
)

const paragraphs = [
  {
    title: "Preparation & Kickoff",
    text:
      "Before the film fest, you can form your team of four or sign up to be matched with others. At the kickoff, your team will randomly pick prompts from a set of three categories. You have to use at least two of them in your film.",
  },
  {
    title: "Writing, Shooting, & Editing",
    text:
      "After kickoff, you have 168 hours (7 days) to write, shoot, and edit your film. Your team members must be the main contributors to the creation of the film, though you may recruit household members to help out. All participants must follow social distancing protocols and Covid safety guidelines.",
  },
  {
    title: "Screening & Awards",
    text:
      "The collection of films will be premiered on YouTube the day after the submission deadline, and the audience will vote on awards immediately after. Winners will be announced at an awards ceremony on Zoom once the short voting period is over.",
  },
]

const StyledHowItWorksSection = styled.div`
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

HowItWorksSection.propTypes = {}

HowItWorksSection.defaultProps = {}

export default HowItWorksSection
