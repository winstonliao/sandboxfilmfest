import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ProfileItem = ({ image, name, bio, linkName, link }) => (
	<StyledProfileItem image={ image }>
    <div className='image-wrapper'><div className='image'></div></div>
    <div class='text'>
      <p className='name'>{ name }</p>
      <p className='bio'>{ bio }</p>
      <a href={ link }>{ linkName }</a>
    </div>
	</StyledProfileItem>
)

const StyledProfileItem = styled.div`
  position: relative;
  height: 25rem;

  color: var(--white);

  & .image-wrapper {
    position: absolute;
    right: 0;
    width: 15rem;

    & .image {
      overflow: hidden;
      height: 0;
      padding-top: 100%;
      
      background-color: var(--dark-grey);
      background-image: url('${props => props.image}');
    }
  }

  & .text {
    position: relative;
    top: 10rem;
    left: 0;

    & .name {
      top: 20rem;
      margin-bottom: 0.5rem;
      
      font-size: var(--medium);
      font-weight: var(--heavy-weight);
    }

    & .bio {
      top: 30rem;
      margin-right: 5rem;
      
      font-size: var(--small);
      font-weight: var(--medium-weight);
      line-height: 1rem;
    }
   
    & a {
      font-weight: var(--heavy-weight);
      color: var(--white);
      text-decoration: none;
    }
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