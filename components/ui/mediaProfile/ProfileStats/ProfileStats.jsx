import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../../SocialLinks';
import Facts from './Facts';
import Genre from './Genre';
import Keyords from './Keyords';

const Styled = styled.section`
  background-color: #e2e2e2;

  * {
    color: var(--second-clr);
  }

  .inner--content {
    display: grid;
    grid-row-gap: 1em;
    padding: 2em 1em;
  }

  .title {
    font-size: 1.2rem;
    margin-bottom: 1em;
  }

  @media screen and (min-width: 1000px) {
    .inner--content {
      padding: 2em;
    }
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
