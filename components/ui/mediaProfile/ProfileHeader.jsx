import React, { useContext } from 'react';
import styled from 'styled-components';
import MovieContext from '../../context/MovieContext';
import { IMG_URL } from '../../context/types';
import groupCredits from '../../utility/groupCredits';
import timeConvert from '../../utility/timeConvert';
import CirclePercentage from '../CirclePercentage';
import TagGroup from '../TagGroup';
import PlayButton from '../PlayButton';
import Link from 'next/link';
import getRating from '../../utility/getRating';

const Styled = styled.div`
  display: grid;
  grid-gap: 1.7em;
  grid-auto-columns: auto;

  .rating {
    svg {
      margin-right: calc(3vw + 0.5em);
    }
  }

  .head {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1em;
    padding: 0 1em 0.5em;

    .title {
      align-self: center;
      font-size: calc(0.5em + 3vw);
    }
  }

  /* profile--content__img */
  .profile--content__img {
    width: 120px;
    margin-top: -8em;
    align-self: flex-end;
  }

  .year {
    opacity: 0.6;
    font-weight: 400;
  }

  .rating,
  .meta {
    display: flex;
    align-items: center;
    padding: 0 0.5em;
  }

  .tag--group {
    border-left: 1px solid #7b7b7b;
    padding-left: 1.5em;
  }

  /* /// */
  .meta {
    justify-content: space-between;
    font-size: 0.85rem;
    align-items: stretch;

    &--tab {
      border-right: 1px solid #7b7b7b;
      padding: 0 1em;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &--tab:last-child {
      border: none;
      padding: 0;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  .crew {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    font-weight: bold;
  }

  .play--button {
    width: fit-content;
  }

  @media screen and (min-width: 768px) {
    .profile--header {
      max-width: 1100px;
      padding: 2em 1em;
    }

    .head .profile--content__img {
      width: 160px;
    }

    .rating {
      grid-column: 1 /2;
    }

    .meta {
      grid-column: 2 /3;
    }

    .head,
    .overview,
    .crew {
      grid-column: 1/ 3;
    }

    .play--button {
      flex-direction: row;
      font-size: 1.1rem;

      &::before {
        width: auto;
        margin: auto;
        transform-origin: left;
      }

      svg {
        font-size: 2rem;
        order: 1;
        margin-left: 5px;
      }

      &:hover svg,
      &:focus svg {
        margin-left: 15px;
        margin-bottom: 0;
        transform: scale(0.98);
      }
    }

    .CircularProgressbar {
      width: 66px;
    }
  }
`;

const ProfileHeader = ({ data }) => {
  const { setModal } = useContext(MovieContext);

  const getGenres = () =>
    data.genres.map((item, i) => (
      <span className='genre--tab' key={item.name}>
        {item.name}
        {data.genres.length - 1 === i ? '' : ', '}
      </span>
    ));

  return (
    <Styled className='profile--content'>
      <div className='head'>
        <div className='profile--content__img'>
          <img
            className='poster'
            src={`${IMG_URL}${data.poster_path || data.profile_path}`}
            alt={data.title || data.name}
          />
        </div>
        <h2 className='title'>
          {data.title || data.name}{' '}
          <span className='year'>({data.release_date.slice(0, 4)})</span>
        </h2>
      </div>
      <div className='rating'>
        <CirclePercentage value={data.vote_average * 10} />
        <TagGroup />
      </div>
      <div className='meta'>
        <span className='release meta--tab'>
          {data.release_date.slice(0, 4)}
        </span>
        <span className='runtime meta--tab'>{timeConvert(data.runtime)}</span>
        <span className='rating meta--tab'>
          {getRating(data.release_dates.results)}
        </span>
        <span className='genre meta--tab'>{getGenres()}</span>
      </div>
      <div className='overview'>
        <h3 className='subTitle'>OVERVIEW</h3>
        <p className='overview--para'>{data.overview}</p>
      </div>
      <div className='crew'>
        {groupCredits(data.credits.crew).map(
          (c, i) =>
            i < 6 && (
              <div key={c[0].id} className='crew--person'>
                <Link href='/person/[id]' as={`/person/${c[0].id}`}>
                  <a>{c[0].name}</a>
                </Link>
                <small className='d-block mt-1'>
                  {c[0].department.join(', ')}
                </small>
              </div>
            )
        )}
      </div>
      <PlayButton onclick={() => setModal(data.videos.results[1].key)} />
    </Styled>
  );
};

export default ProfileHeader;
