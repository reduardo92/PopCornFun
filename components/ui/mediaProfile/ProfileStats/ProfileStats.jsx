import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../../SocialLinks';
import Facts from './Facts';
import Genre from './Genre';
import Keyords from './Keyords';

const Styled = styled.section`
  display: grid;
  grid-row-gap: 1em;
  background-color: var(--accent-clr);
  padding: 2em 1em;
  * {
    color: var(--second-clr);
  }

  .title {
    font-size: 1.2rem;
    margin-bottom: 1em;
  }
`;

const ProfileStats = ({ data, keywords }) => {
  return (
    <Styled className='profile--stats'>
      <SocialLinks data={data.external_ids} homepage={data.homepage} />
      <Facts data={data} />
      <Genre data={data.genres} typeFor={data.typeFor} />
      <Keyords data={keywords} typeFor={data.typeFor} />
    </Styled>
  );
};

export default ProfileStats;
