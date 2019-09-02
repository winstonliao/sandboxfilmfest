import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Year = ({year, targetYear}) => (
	<StyledYear className={year == targetYear ? 'underline' : ''}>
    {year}
	</StyledYear>
)

const StyledYear = styled.span`
`

Year.propTypes = {
  year: PropTypes.number,
  targetYear: PropTypes.number,
}

Year.defaultProps = {
  year: 0,
  targetYear: 0,
}

export default Year