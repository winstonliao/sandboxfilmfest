import React, { Component } from 'react'
import styled from 'styled-components'

class Hero extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

	render() {
    return(
			<StyledHero>
        <div class='text'>
          <h6></h6>
          <h1></h1>
          <div>
            <div><span></span></div>
            <span></span>
          </div>
        </div>
        <div class='image'>
        </div>
			</StyledHero>
		)
	}
}

const StyledHero = styled.div`
`

export default Hero