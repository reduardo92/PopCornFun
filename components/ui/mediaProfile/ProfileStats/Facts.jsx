import React from 'react';
import styled from 'styled-components';
import timeConvert from '../../../utility/timeConvert';
import numberWithCommas from '../../../utility/numberWithCommas';
import ReleaseContent from './ReleaseContent';

const Styled = styled.div`
  .release--content {
    display: grid;
    grid-row-gap: 1em;

    & > :first-child {
      margin-top: 0.5em;
    }
  }

  .release--date,
  .certification {
    display: flex;
    align-items: center;
    justify-content: start;

    & > :first-child {
      margin-right: 0.5em;
    }
  }

  .world {
    font-size: 1.5rem;

    path {
      color: #535353;
    }
  }

  .rate {
    border-radius: 2px;
    background-color: var(--primary-clr);
    color: #fff;
    padding: 0.15em 0.5em;
    font-size: 0.8rem;
    border-radius: 5px;
  }

  .network--logo {
    width: 60px;
  }
`;

const Facts = ({ data }) => {
  return (
    <Styled className='profile--stats--facts'>
      <h3 className='title'>Facts</h3>
      <div className='stat'>
        <p className='stat--title'>Status</p>
        <span className='stat--subtext'>{data.status}</span>
      </div>
      <div className='stat'>
        <p className='stat--title'>
          {data.release_dates ? 'Release Information' : 'Networks'}
        </p>
        <ReleaseContent data={data} />
      </div>
      {data.typeFor === 'tv' && (
        <div className='stat'>
          <p className='stat--title'>Type</p>
          <span className='stat--subtext'>{data.type}</span>
        </div>
      )}
      <div className='stat'>
        <p className='stat--title'>Original Language</p>
        <span className='stat--subtext'>{data.original_language}</span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Runtime</p>
        <span className='stat--subtext'>
          {timeConvert(data.runtime || data.episode_run_time[0])}
        </span>
      </div>
      {data.typeFor === 'tv' ? null : (
        <>
          <div className='stat'>
            <p className='stat--title'>Budget</p>
            <span className='stat--subtext'>
              {data.budget === 0 ? 'N/A' : `$${numberWithCommas(data.budget)}`}
            </span>
          </div>
          <div className='stat'>
            <p className='stat--title'>Revenue</p>
            <span className='stat--subtext'>
              {data.revenue === 0
                ? 'N/A'
                : `$${numberWithCommas(data.revenue)}`}
            </span>
          </div>
        </>
      )}
    </Styled>
  );
};

export default Facts;

// .release_dates.map((item, i) => (
//   <li key={i}>
//     <div className='release--date'>
//       <TiWorld className='world' />
//       <span className='stat--subtext'>
//         {setDateFormat(item.release_date.slice(0, 10))}
//       </span>
//     </div>
//     <div className='certification'>
//       <span className='rate'>{item.certification}</span>
//       <span className='stat--subtext'>
//         {getReleaseType[item.type]}
//       </span>
//     </div>
//   </li>
