import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../../SocialLinks';
import Facts from './Facts';
import Genre from './Genre';
import Keyords from './Keyords';

const Styled = styled.section`
  background-color: var(--accent-clr);

  * {
    color: var(--second-clr);
  }

  .inner--content {
    display: grid;
    grid-row-gap: 1em;
    background-color: var(--accent-clr);
    padding: 2em 1em;
  }

  .title {
    font-size: 1.2rem;
    margin-bottom: 1em;
  }

  @media screen and (min-width: 1000px) {
    width: calc((100vw - 1000px) / 2 + 220px);
    min-height: calc(100vh - 795px);
  }
`;

const ProfileStats = ({ data, keywords }) => {
  return (
    <Styled className='profile--stats'>
      <div className='inner--content'>
        <SocialLinks data={data.external_ids} homepage={data.homepage} />
        <Facts data={data} />
        <Genre data={data.genres} typeFor={data.typeFor} />
        <Keyords data={keywords} typeFor={data.typeFor} />
      </div>
    </Styled>
  );
};

export default ProfileStats;
