import React from 'react';
import styled from 'styled-components';
import setDateFormat from '../../utility/setDateFormat';
import SocialLinks from '../SocialLinks';

const Styled = styled.div`
  background-color: var(--accent-clr);
  padding: 2em 1em;
  * {
    color: var(--second-clr);
  }

  .subTitle {
    margin: 1em 0;
  }
`;
const PersonFacts = ({ data }) => {
  return (
    <Styled className='profile--facts'>
      <SocialLinks data={data.external_ids} homepage={data.homepage} />
      <h3 className='subTitle'>Personal Info</h3>
      <div className='stat'>
        <p className='stat--title'>Know For</p>
        <span className='stat--subtext'>{data.known_for_department}</span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Gender</p>
        <span className='stat--subtext'>
          {data.gender === 1 ? 'Female' : 'Male'}
        </span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Know Credits</p>
        <span className='stat--subtext'>
          {parseInt(data.combined_credits.cast.length - 1) +
            parseInt(data.combined_credits.crew.length - 1)}
        </span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Birthday</p>
        <span className='stat--subtext'>{setDateFormat(data.birthday)}</span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Place of Birth</p>
        <span className='stat--subtext'>{data.place_of_birth}</span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Official Site</p>
        <span className='stat--subtext'>
          {data.homepage ? data.homepage : '-'}
        </span>
      </div>
      <div className='stat'>
        <p className='stat--title'>Also Know As</p>
        <div className='stat--subtext'>
          {data.also_known_as.map(name => (
            <span key={name} className='d-block'>
              {name}
            </span>
          ))}
        </div>
      </div>
    </Styled>
  );
};

export default PersonFacts;
