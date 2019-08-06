import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ExtLink = ({ link, text }) => (
	<StyledExtLink href={ link } target='_blank'>{ text }&nbsp↗</StyledExtLink>
)

const StyledExtLink = styled.a`
`

ExtLink.propTypes = {
}

ExtLink.defaultProps = {
}

export default ExtLink