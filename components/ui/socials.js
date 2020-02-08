import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Styled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  margin: 0 auto;

  .social--link {
    color: var(--white-clr);
    transition: var(--ease--in--out--02s);
    font-size: 1.3rem;

    &:hover,
    &:focus {
      color: var(--accent-clr);
    }
  }

  @media screen and (min-width: 1024px) {
    .social--link {
      font-size: 1.5rem;
    }
  }
`;
const Socials = () => (
  <Styled className='social'>
    <a className='social--link' href='#' target='_blank'>
      <FaInstagram />
    </a>
    <a className='social--link' href='#' target='_blank'>
      <FaFacebookF />
    </a>
    <a className='social--link' href='#' target='_blank'>
      <FaTwitter />
    </a>
  </Styled>
);

export default Socials;
