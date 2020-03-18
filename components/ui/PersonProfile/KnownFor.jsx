import React from 'react';
import styled from 'styled-components';
import SimpleFlex from '../SimpleFlex';
import RecommenCard from '../Cards/RecommenCard';

const Styled = styled.div`
  @media screen and (min-width: 1000px) {
    .knonwFor--content {
      all: unset;
      display: grid;
      /* grid-template-columns: repeat(min, 1fr); */
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 2.7em 1em;
      padding-top: 1.2em;

      div {
        margin: 0;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .subTitle,
    .rating--star {
      color: var(--second-clr);
    }
    .recommend--card__content--name {
      color: var(--second-clr);
    }
  }
`;

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
