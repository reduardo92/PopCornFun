import React from 'react';
import styled from 'styled-components';
import RecommenCard from './Cards/RecommenCard';
import SimpleFlex from './SimpleFlex';

const Styled = styled.section`
  padding: 1em 0.5em;

  .subTitle {
    margin-bottom: 1.5em;
  }

  @media screen and (min-width: 1280px) {
    .simple--flex {
      & > div {
        width: 180px;
      }
    }
  }
`;

const RecommenSection = ({ data, typeFor = 'movie' }) => {
  return (
    <Styled className='recommendations--section'>
      <h3 className='subTitle'>Recommendations</h3>
      <SimpleFlex className='simple--flex' setWidth='160px'>
        {data.map(item => (
          <RecommenCard key={item.id} data={item} typeFor={typeFor} />
        ))}
      </SimpleFlex>
    </Styled>
  );
};

export default RecommenSection;
