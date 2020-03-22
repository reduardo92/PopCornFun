import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import CirclePercentage from '../CirclePercentage';
import { IMG_URL } from '../../context/types';
import setDateFormat from '../../utility/setDateFormat';

const Styled = styled.div`
  /* margin-bottom: 2em; */
  display: flex;
  flex-direction: column;

  .poster__img {
    display: none;
  }

  .card--poster {
    .card--poster--link img {
      transition: var(--ease--in--out--02s);
      height: 100%;
      object-fit: cover;
    }

    .backdrop__img {
      max-height: 197.82px;
    }

    &:hover .card--poster--link img {
      opacity: 0.5;
    }
  }

  .card--body {
    background: var(--bg-gradient);
    border-radius: 0 0 3px 3px;
    height: 100%;

    &__head {
      display: flex;
      align-items: center;
      padding: 0.5em 0;
      padding-left: 0.5em;

      .CircularProgressbar {
        width: 2.8em;
        flex: 0 0 2.8em;
        margin-right: 1em;
      }
    }

    &__overview {
      font-size: 0.9rem;
      padding: 0 0.5em;
    }
  }

  .title--section {
    .title {
      font-size: 1.1rem;
      color: var(--white-clr);

      &:hover {
        opacity: 0.7;
      }
    }
    .release--date {
      color: rgba(255, 255, 255, 0.68);
    }
  }

  .more--info {
    border-top: 1px solid rgba(191, 191, 191, 0.52);
    padding: 0.8em 0.8em;
    font-size: 0.9rem;

    .more--info__link {
      color: var(--white-clr);
      transition: var(--ease--in--out--02s);
    }

    &:hover .more--info__link {
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    max-width: 90%;

    .poster__img {
      display: block;
    }

    .backdrop__img {
      display: none;
    }

    .card--body {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 0 0 73.5%;
      width: 73.5%;

      &__head {
        padding: 0.5em 0.5em 0;
        height: auto;
      }

      &__overview {
        max-width: 85%;
        font-size: 0.95rem;
      }
    }

    .more--info {
      font-size: 0.95rem;
    }
  }
`;

const CardTwo = ({ data, typeFor }) => {
  return (
    <Styled className='card--two'>
      <div className='card--poster'>
        <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
          <a className='card--poster--link'>
            <img
              className='poster__img'
              src={
                data.poster_path || data.profile_path
                  ? `${IMG_URL}${data.poster_path || data.profile_path}`
                  : 'no_img.jpg'
              }
              alt={data.title || data.name}
            />
            <img
              className='backdrop__img'
              src={
                data.backdrop_path
                  ? `${IMG_URL}${data.backdrop_path}`
                  : 'no_img.jpg'
              }
              alt={data.title || data.name}
            />
          </a>
        </Link>
      </div>
      <div className='card--body'>
        <div className='card--body__head'>
          <CirclePercentage
            className='percentege'
            value={data.vote_average * 10}
          />
          <div className='title--section'>
            <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
              <a className='title'>{data.title || data.name}</a>
            </Link>
            <div className='release--date'>
              {data.release_date
                ? setDateFormat(data.release_date)
                : data.first_air_date
                ? setDateFormat(data.first_air_date)
                : data.known_for_department}
            </div>
          </div>
        </div>
        <p className='card--body__overview'>
          {data.overview.length >= 170
            ? `${data.overview.slice(0, 170)}...`
            : data.overview}
        </p>
        <div className='more--info'>
          <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
            <a className='more--info__link'>More Info</a>
          </Link>
        </div>
      </div>
    </Styled>
  );
};

export default CardTwo;
