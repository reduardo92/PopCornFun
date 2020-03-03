import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IMG_URL } from '../../context/types';
import { GoStar } from 'react-icons/go';

const Styled = styled.figure`
  width: 160px;

  .card--poster {
    position: relative;
    transition: var(--ease--in--out--02s);
    cursor: pointer;

    &::after {
      content: 'View More';
      transition: var(--ease--in--out--02s);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      font-size: 0.8rem;
      font-weight: bold;
      background-color: rgba(188, 49, 49, 0.85);
      height: 0;
      width: 100%;
      opacity: 0;
      top: 0;
      left: 0;
      right: 0;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      height: 100%;
    }
  }

  .card--body {
    &__info {
      color: ${({ invert }) =>
        invert ? 'var(--second-clr)' : 'var(--grey-clr)'};
      display: flex;
      align-items: baseline;
      margin-top: 0.5em;
    }

    &__title a {
      font-weight: bold;
      color: ${({ invert }) => invert && 'var(--second-clr)'};
      transition: var(--ease--in--out--02s);

      &:hover,
      &:focus {
        color: var(--primary-clr);
      }
    }
  }

  @media screen and (min-width: 1280px) {
    width: 180px;
  }
`;

const CardOne = ({ data, typeFor, invert }) => (
  <Styled className='card--one' invert={invert}>
    <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
      <div className='card--poster'>
        <img
          className='poster__img'
          src={`${IMG_URL}${data.poster_path || data.profile_path}`}
          alt={data.title || data.name}
        />
      </div>
    </Link>
    <div className='card--body'>
      <div className='card--body__info'>
        <span className='info--top'>
          {data.release_date ||
            data.first_air_date ||
            data.known_for_department}
        </span>
        {(data.release_date || data.first_air_date) && (
          <span className='rating--star'>
            {data.vote_average}
            <GoStar className='star' />
          </span>
        )}
      </div>
      <div className='card--body__title'>
        <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
          {data.title || data.name}
        </Link>
      </div>
    </div>
  </Styled>
);

export default CardOne;
