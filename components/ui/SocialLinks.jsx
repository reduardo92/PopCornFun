import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaExternalLinkSquareAlt
} from 'react-icons/fa';

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  font-size: 1.6rem;
`;

const SocialLinks = ({ data, homepage }) => {
  return (
    <Styled className='social--links'>
      <a href={`https://www.facebook.com/${data.facebook_id}`} target='_blank'>
        <FaFacebookF className='social--link' />
      </a>
      <a href={`https://twitter.com/${data.twitter_id}`} target='_blank'>
        <FaTwitter className='social--link' />
      </a>
      <a
        href={`https://www.instagram.com/${data.instagram_id}`}
        target='_blank'
      >
        <FaInstagram className='social--link' />
      </a>
      <a href={homepage} target='_blank'>
        <FaExternalLinkSquareAlt className='social--link' />
      </a>
    </Styled>
  );
};

export default SocialLinks;
