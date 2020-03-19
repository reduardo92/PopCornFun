import React from 'react';
import styled from 'styled-components';
import setDateFormat from '../../utility/setDateFormat';
import SocialLinks from '../SocialLinks';

const Styled = styled.div`
  background-color: var(--accent-clr);
  position: relative;
  z-index: 1;
  * {
    color: var(--second-clr);
  }

  .inner--content {
    padding: 2em 1em;
  }

  .subTitle {
    margin: 1em 0;
  }

  @media screen and (min-width: 1000px) {
    &::before {
      content: '';
      background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
        url('/theater_sets2.jpg') no-repeat center;
      background-color: black;
      min-height: 800px;
      position: absolute;
      top: 0;
      left: 0;
      right: calc(375px - -10px);
      bottom: 0;
      background-size: cover;
      background-position: 0 85%;
      background-attachment: fixed;
      object-fit: cover;
      z-index: -1;
    }

    .inner--content {
      margin-left: auto;
      display: flex;
      flex-direction: column;
      width: 375px;
      padding-top: 0.5em;
    }
  }
`;
const PersonFacts = ({ data }) => {
  return (
    <Styled className='profile--facts'>
      <div className='inner--content'>
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
          <span className='stat--subtext'>
            {data.birthday ? setDateFormat(data.birthday) : '-'}
          </span>
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
      </div>
    </Styled>
  );
};

export default PersonFacts;
