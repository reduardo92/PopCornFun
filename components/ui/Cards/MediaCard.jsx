import React from 'react';
import styled from 'styled-components';
import { FaRegPlayCircle, FaSearch } from 'react-icons/fa';
import { IMG_URL } from '../../context/types';

const Styled = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.2)),
    url(${({ bgImg, forMedia }) =>
        forMedia === 'videos'
          ? `http://img.youtube.com/vi/${bgImg}/0.jpg`
          : `${IMG_URL}${bgImg}`})
      no-repeat center;
  background-size: cover;
  object-fit: 'cover';
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .media--button {
    background-color: transparent;
    border: none;
  }

  .media--play,
  .media--scale {
    color: var(--accent-clr);
    font-size: 2rem;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      opacity: 0.9;
      transform: scale(0.9);
    }
  }

  .media--scale {
    font-size: 1rem;
  }
`;

const MediaCard = ({ data, typeFor = 'videos', SetMedia }) => {
  return (
    <Styled
      className={`media--card ${typeFor === 'videos' ? 'vid' : 'img'}`}
      forMedia={typeFor}
      bgImg={data.key || data.file_path}
    >
      <button className='media--button' onClick={() => SetMedia()}>
        {typeFor === 'videos' ? (
          <FaRegPlayCircle className='media--play' />
        ) : (
          <FaSearch className='media--scale' />
        )}{' '}
      </button>
    </Styled>
  );
};

export default MediaCard;
