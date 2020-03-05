import React from 'react';
import styled from 'styled-components';
import timeConvert from '../../../utility/timeConvert';
import numberWithCommas from '../../../utility/numberWithCommas';
import setDateFormat from '../../../utility/setDateFormat';
import { TiWorld } from 'react-icons/ti';

const Styled = styled.div`
  .stat {
    text-transform: capitalize;
    margin-bottom: 0.7em;
  }

  .stat--title {
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.1em;
  }

  .world {
    font-size: 1.5rem;
  }
`;

const Facts = ({ data }) => {
  const getReleaseType = {
    1: 'Premiere',
    2: 'Theatrical (limited)',
    3: 'Theatrical',
    4: 'Digital',
    5: 'Physical',
    6: 'Tv'
  };
  return (
    <Styled className='profile--stats--facts'>
      <h3 className='title'>Facts</h3>
      <div className='stat'>
        <p className='stat--title'>Status</p>
        <span className='stat--subtext'>{data.status}</span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Release Information</p>
        <ul className='release--content'>
          {data.release_dates.results
            .filter(item => item.iso_3166_1 === 'US')[0]
            .release_dates.map((item, i) => (
              <li key={i}>
                <div className='release--date'>
                  <TiWorld className='world' />
                  <span className='stat--subtext'>
                    {setDateFormat(item.release_date.slice(0, 10))}
                  </span>
                </div>
                <div className='certification'>
                  <span className='rate'>{item.certification}</span>
                  <span className='stat--subtext'>
                    {getReleaseType[item.type]}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className='stat'>
        <p className='stat--title'>Original Language</p>
        <span className='stat--subtext'>{data.original_language}</span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Runtime</p>
        <span className='stat--subtext'>{timeConvert(data.runtime)}</span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Budget</p>
        <span className='stat--subtext'>
          {data.revenue === 0 ? 'N/A' : `$${numberWithCommas(data.revenue)}`}
        </span>
      </div>
    </Styled>
  );
};

export default Facts;
