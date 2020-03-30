import React from 'react';
import styled from 'styled-components';
import RecommenCard from './Cards/RecommenCard';
import SimpleFlex from './SimpleFlex';
import CardOne from './Cards/CardOne';

const Styled = styled.section`
  padding: 1em 0.5em;
  max-width: 1000px;

  .subTitle {
    margin-bottom: 1.5em;
  }

  .card--one {
    flex: 0 0 160px;
    margin-right: 1.5em;
  }

  @media screen and (min-width: 1280px) {
    .card--one {
      flex: 0 0 180px;
      margin-right: 1.5em;
    }
  }
`;

const RecommenSection = ({ data }) => {
  return (
    <Styled className='recommendations--section'>
      <h3 className='subTitle'>Recommendations</h3>
      <SimpleFlex className='simple--flex' setWidth='180px'>
        {data.recommendations.results.slice(0, 10).map(item => (
          // <RecommenCard key={item.id} data={item} typeFor={data.typeFor} />
          <CardOne key={item.id} data={item} typeFor={data.typeFor} />
        ))}
      </SimpleFlex>
    </Styled>
  );
};

export default RecommenSection;
