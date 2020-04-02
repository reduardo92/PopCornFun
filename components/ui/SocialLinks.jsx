import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaExternalLinkSquareAlt,
  FaImdb
} from 'react-icons/fa';

const Styled = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 1.6rem;

  a {
    margin-right: 1em;
    transition: var(--ease-12s);

    & svg:hover,
    & svg:focus {
      opacity: 0.8;
      color: var(--primary-clr) !important;
    }
  }

  & > a:last-child {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    color: var(--primary-clr);
  }
`;

const SocialLinks = ({ data, homepage }) => {
  return (
    <Styled className='social--links'>
      {data.facebook_id && (
        <a
          href={`https://www.facebook.com/${data.facebook_id}`}
          target='_blank'
        >
          <FaFacebookF className='social--link' />
        </a>
      )}
      {data.twitter_id && (
        <a href={`https://twitter.com/${data.twitter_id}`} target='_blank'>
          <FaTwitter className='social--link' />
        </a>
      )}
      {data.instagram_id && (
        <a
          href={`https://www.instagram.com/${data.instagram_id}`}
          target='_blank'
        >
          <FaInstagram className='social--link' />
        </a>
      )}
      {data.homepage && (
        <a href={homepage} target='_blank'>
          <FaExternalLinkSquareAlt className='social--link' />
        </a>
      )}
      {data.imdb_id && (
        <a href={`https://www.imdb.com/${data.imdb_id}`} target='_blank'>
          <FaImdb className='social--link' />
        </a>
      )}
    </Styled>
  );
};

export default SocialLinks;
