import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ProfileItem = ({ image, name, bio, linkName, link }) => (
	<StyledProfileItem image={image}>
    <div className='image'></div>
    <span className='name'>{ name }</span>
    <p className='bio'>{ bio }</p>
    <a href={ link }>{ linkName } &#8599</a>
	</StyledProfileItem>
)

const StyledProfileItem = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  overflow: hidden;
  height: 0;
  padding-top: 100%;

  & .image {
    overflow: hidden;
    height: 0;
    padding-top: 100%;
    
    background-image: url('${props => props.image}');
  }
`

ProfileItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  linkName: PropTypes.string,
  link: PropTypes.string,
}

ProfileItem.defaultProps = {
  image: '',
  name: '',
  bio: '',
  linkName: '',
  link: '',
}

export default ProfileItem