import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IMG_URL } from '../../context/types';

const Styled = styled.figure`
  width: 160px;

  .card--poster {
    position: relative;
    transition: var(--ease--in--out--02s);
    cursor: pointer;

    &::after {
      content: 'View More';
      transition: var(--ease--in--out--02s);
      display: grid;
      justify-items: center;
      align-items: center;
      position: absolute;
      font-size: 0.8rem;
      font-weight: bold;
      background-color: rgba(64, 4, 4, 0.7);
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
      color: var(--grey-clr);
    }

    &__title {
      font-weight: bold;
    }
  }

  @media screen and (min-width: 768px) {
  }
`;

const CardOne = ({ data, typeFor }) => (
  <Styled className='card--one'>
    <div className='card--poster'>
      <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
        <img
          className='poster__img'
          src={`${IMG_URL}${data.poster_path}`}
          alt={data.title || data.name}
        />
      </Link>
    </div>
    <div className='card--body'>
      <div className='card--body__info'>
        {data.release_date || data.first_air_date}
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
