import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Entry = ({title, text}) => (
	<StyledEntry>
    <h3 class='title'>{title}</h3>
    <p>{text}</p>
	</StyledEntry>
)

const StyledEntry = styled.div`
`

Entry.propTypes = {
}

Entry.defaultProps = {
}

export default Entry