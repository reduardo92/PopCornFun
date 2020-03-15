import React from 'react';
import styled from 'styled-components';
import { IMG_URL } from '../../context/types';
import { GoCalendar, GoStar } from 'react-icons/go';
import Link from 'next/link';

const Styled = styled.div`
  .recommend--card--poster {
    position: relative;
    width: 160px;
    height: 240px;
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

    &__release {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: var(--white-clr);
      background-color: var(--primary-clr);
      padding: 0.5em 0;
      text-align: center;
      font-weight: bold;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;

      .calendar {
        margin-right: 0.5em;
        font-size: 1.2rem;
      }

      .date {
        margin-right: 0.5em;
      }
    }
  }

  .recommend--card__content {
    display: flex;
    align-items: baseline;
    margin-top: 0.5em;
    /* font-weight: bold; */

    &--name {
      font-weight: bold;
    }
  }

  @media screen and (min-width: 1280px) {
    .recommend--card--poster {
      width: 180px;
      height: 270px;
    }
  }
`;

const RecommenCard = ({ data, typeFor }) => {
  return (
    <Styled className='recommend--card'>
      <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
        <div className='recommend--card--poster'>
          <img
            className='recommend--card--poster__img'
            src={`${IMG_URL}${data.poster_path}`}
            alt={data.title || data.name}
          />
          <div className='recommend--card--poster__release'>
            <GoCalendar className='calendar' />
            <span className='date'>
              {data.release_date || data.first_air_date}
            </span>
          </div>
        </div>
      </Link>

      <div className='recommend--card__content'>
        <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
          <a className='recommend--card__content--name'>
            {data.title || data.name}
          </a>
        </Link>
        <span className='rating--star'>
          {data.vote_average}
          <GoStar className='star' />
        </span>
      </div>
    </Styled>
  );
};

export default RecommenCard;
