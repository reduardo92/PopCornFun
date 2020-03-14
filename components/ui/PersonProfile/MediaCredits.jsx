import React from 'react';
import styled from 'styled-components';
import CreditsTabs from '../mediaProfile/CreditsTabs';
import groupeCrew from '../../utility/groupeCrew';
import groupByDate from '../../utility/groupByDate';

const Styled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  .tabs--container {
    flex-wrap: nowrap;
  }

  .profile--media__credits--content {
    display: grid;
    grid-column: 1 / 3;
    margin-top: 1.2em;
    grid-gap: 1.5em;
  }

  .grouped {
    & > div:first-child {
      padding-top: 0.6em !important;
    }
    & > div:last-child {
      padding-bottom: 0.6em !important;
    }
    .date {
      flex: 0 0 9%;
    }
  }
`;

const MediaCredits = ({ data, tab, setTab }) => {
  const actingDiv = (arry, sortBy, media) => {
    const data = groupByDate(arry, sortBy);
    return Object.entries(data)
      .sort((a, b) => b[0] - a[0])
      .map(([_, value]) => (
        <div key={Math.random() * 10} className='grouped border border-black '>
          {value.map(i => (
            <CreditsTabs key={Math.random() * 10} data={i} typeFor={media} />
          ))}
        </div>
      ));
  };

  const crewDiv = (arr, sortBy, media) => {
    const data = Object.entries(groupeCrew(arr, 'department', sortBy));

    return data.map(([key, _], index) => (
      <div key={key} className='credit--role'>
        <h3 className='subTitle text-light my-3'>{key}</h3>
        {data
          .map(([_, value]) => value)
          [index].map(item =>
            item.map(i => (
              <div
                key={Math.random() * 10}
                className='grouped border border-black'
              >
                <CreditsTabs data={i} typeFor={media} />
              </div>
            ))
          )}
      </div>
    ));
  };

  return (
    <Styled className='profile--media__credits px-2'>
      <h3 className='subTitle'>Credits</h3>
      <div className='tabs--container'>
        <button
          className={`tab ${tab === 'movies' && 'activeTab'}`}
          onClick={() => setTab('movies')}
        >
          Movies
        </button>
        <button
          className={`tab ${tab === 'tv' && 'activeTab'}`}
          onClick={() => setTab('tv')}
        >
          Tv Shows
        </button>
      </div>
      <div className='profile--media__credits--content table'>
        <div className='credit--role'>
          {(data.movie_credits.cast || data.tv_credits.cast) && (
            <h3 className='subTitle text-light my-3'>Acting</h3>
          )}
          {tab === 'movies' ? (
            actingDiv(data.movie_credits.cast, 'release_date', 'movie')
          ) : tab === 'tv' ? (
            actingDiv(data.tv_credits.cast, 'first_air_date', 'tv')
          ) : (
            <p>nothing available</p>
          )}
        </div>
        {tab === 'movies' ? (
          crewDiv(data.movie_credits.crew, 'release_date', 'movie')
        ) : tab === 'tv' ? (
          crewDiv(data.tv_credits.crew, 'first_air_date', 'tv')
        ) : (
          <p>nothing available</p>
        )}
      </div>
    </Styled>
  );
};

export default MediaCredits;
