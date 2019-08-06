import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const SingleLayout = ({children}) => (
	<StyledSingleLayout>
    {{ ...children }}
	</StyledSingleLayout>
)

const StyledSingleLayout = styled.div`
`

SingleLayout.propTypes = {
}

SingleLayout.defaultProps = {
}

export default SingleLayout