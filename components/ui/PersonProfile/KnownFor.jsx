import React from 'react';
import styled from 'styled-components';
import SimpleFlex from '../SimpleFlex';
import RecommenCard from '../Cards/RecommenCard';

const Styled = styled.div``;

const KnownFor = ({ data }) => (
  <Styled className='profile--media__knownFor px-2 pb-5'>
    <h3 className='subTitle'>Known For</h3>
    {data.length === 0 ? (
      <p className='my-5'>Sorry Nothing Available</p>
    ) : (
      <SimpleFlex className='knonwFor--content' setWidth='160px'>
        {data.map(item => (
          <RecommenCard
            key={Math.random() * 10}
            data={item}
            typeFor={item.media_type}
          />
        ))}
      </SimpleFlex>
    )}
  </Styled>
);

export default KnownFor;
