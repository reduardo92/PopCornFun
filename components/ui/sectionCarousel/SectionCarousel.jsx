import React from 'react';
import styled from 'styled-components';
import CardOne from '../Cards/CardOne';
import CardTitle from '../CardTitle';
import ButtonSimple from '../ButtonSimple';
import Carousell from '../carousel/carousel';

const Styled = styled.section`
  padding: 2em 0.5em 0;

  @media screen and (min-width: 1000px) {
    display: flex;

    .card--title {
      flex: 0 0 20%;
      max-width: 20%;
      margin-right: 1em;
      align-self: center;
      margin-top: 6%;
    }
  }
`;

const SectionCarousel = ({ data, typeFor, title, toLink, btnTitle }) => {
  return (
    <Styled className='section--carousel--media max-width'>
      <CardTitle title={title} invert>
        <ButtonSimple toLink={toLink} title={btnTitle} />
      </CardTitle>
      <Carousell>
        {data.map(item => (
          <CardOne key={item.id} data={item} typeFor={typeFor} invert />
        ))}
      </Carousell>
    </Styled>
  );
};

export default SectionCarousel;
