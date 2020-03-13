import React from 'react';
import Link from 'next/link';
import { TiWorld } from 'react-icons/ti';
import { IMG_URL } from '../../../context/types';
import setDateFormat from '../../../utility/setDateFormat';

const ReleaseContent = ({ data }) => {
  const getReleaseType = {
    1: 'Premiere',
    2: 'Theatrical (limited)',
    3: 'Theatrical',
    4: 'Digital',
    5: 'Physical',
    6: 'Tv'
  };

  const networks =
    data.typeFor === 'tv' &&
    data.networks.map(netWork => (
      <Link key={netWork.id} href='/network/[id]' as={`/network/${netWork.id}`}>
        <img
          className='network--logo'
          src={`${IMG_URL}${netWork.logo_path}`}
          alt={netWork.name}
        />
      </Link>
    ));

  const setData =
    data &&
    Object.values(
      data[
        data.typeFor === 'tv' ? 'content_ratings' : 'release_dates'
      ].results.filter(item => item.iso_3166_1 === 'US')[0]
    )[1];

  return (
    <ul className='release--content'>
      {networks}
      {data.typeFor === 'tv' && <p className='stat--title'>Certification</p>}
      {data.typeFor === 'tv' ? (
        <div className='release--date'>
          <TiWorld className='world' />
          <span className='rate'>{data.typeFor === 'tv' && setData}</span>
        </div>
      ) : (
        setData.map(item => (
          <li key={item.release_date}>
            <div className='release--date'>
              <TiWorld className='world' />
              <span className='stat--subtext'>
                {setDateFormat(item.release_date.slice(0, 10))}
              </span>
            </div>
            <div className='certification'>
              <span className='rate'>{item.certification}</span>
              <span className='stat--subtext'>{getReleaseType[item.type]}</span>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default ReleaseContent;

{
  /* <li key={i}>
<div className='release--date'>
  <TiWorld className='world' />
  <span className='stat--subtext'>
    {setDateFormat(item.release_date.slice(0, 10))}
  </span>
</div>
<div className='certification'>
  <span className='rate'>{item.certification}</span>
  <span className='stat--subtext'>{getReleaseType[item.type]}</span>
</div>
</li> */
}
