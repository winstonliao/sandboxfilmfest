import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ProfileItem = ({ image, name, bio, linkName, link }) => (
	<StyledProfileItem image={ image }>
    <div className='wrapper'>
      <div className='image-wrapper'><div className='image'></div></div>
      <div class='text'>
        <p className='name'>{ name }</p>
        <p className='bio'>{ bio }</p>
        <a href={ link } target='_blank'>{ linkName } ↗</a>
      </div>
    </div>
	</StyledProfileItem>
)

const StyledProfileItem = styled.div`
  
  & .wrapper {
    position: relative;
    height: auto;

    color: var(--white);

    & .image-wrapper {
      position: absolute;
      right: 0;
      width: 15rem;

      & .image {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-top: 100%;
        
        background-color: var(--dark-grey);
        background-image: url('${props => props.image}');
        background-size: cover;
      }
    }

    & .text {
      position: relative;
      padding-top: 10rem;
      left: 0;
      text-shadow: 0 0 3px var(--black);

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
  }

  @media (max-width: 1080px) {

    & .wrapper {
      width: 25rem;

      & .text {
        white-space: normal;

        & .name {
          font-size: 1.75rem;
          line-height: 2rem;
        }

        & .bio {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }

      & .image {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    & .wrapper {
      width: 22rem;
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