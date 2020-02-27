import React from 'react';
import styled from 'styled-components';
import { FaRegPlayCircle, FaSearchPlus } from 'react-icons/fa';

const Styled = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${({ bgImg }) => `http://img.youtube.com/vi/${bgImg}/0.jpg`}) no-repeat
      center;
  background-size: cover;
  object-fit: 'cover';
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .play--button {
    background-color: transparent;
    border: none;
  }

  .media--play {
    color: var(--primary-clr);
    font-size: 4rem;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      opacity: 0.9;
      transform: scale(0.9);
    }
  }
`;

const MediaCard = ({ data, typeFor = 'movie', SetMedia }) => {
  return (
    <Styled className='medai--card' bgImg={data.key || data.file_path}>
      <button className='play--button' onClick={() => SetMedia()}>
        {typeFor === 'movie' ? (
          <FaRegPlayCircle className='media--play' />
        ) : (
          <FaSearchPlus className='media--scale' />
        )}{' '}
      </button>
    </Styled>
  );
};

export default MediaCard;
