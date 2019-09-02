import React, { Component } from 'react'
import styled from 'styled-components'

class LightBox extends LightBox {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler= event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }

	render() {
    return(
			<StyledLightBox>
        <div class='lightbox'>
          <div>
            <iframe>{ props.video }</iframe>
          </div>
          <div>
            <h2>{ props.title }</h2>
            <p>{ props.logline }</p>
          </div>
          <div>
            <h3>Created by</h3>
            {props.creators.map((creator, i) => (
              <p key={i}>{ creator }</p>
            ))}
            <h3>Starring</h3>
            {props.actors.map((actor, i) => (
              <p key={i}>{ actor }</p>
            ))}
            <h3>Awards</h3>
            {props.awards.map((award, i) => (
              <p key={i}>{ award }</p>
            ))}
            <h3>Prompts</h3>
            {props.prompts.map((prompt, i) => (
              [<span>{ prompt.type }:</span>,
              <span>{ prompt.text }</span>,]
            ))}
          </div>
        </div>
        <div class='overlay'></div>
			</StyledLightBox>
		)
	}
}

const StyledLightBox = styled.div`
`

export default LightBox