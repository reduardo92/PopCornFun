import React from 'react';
import styled from 'styled-components';
import CardOne from '../Cards/CardOne';
import CardTitle from '../CardTitle';
import ButtonSimple from '../ButtonSimple';
import Carousell from '../carousel/carousel';

const Styled = styled.section`
  padding: 2em 0.5em 0;

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: ${({ order }) => (order ? '80% auto' : 'auto 80%')};
    grid-gap: 1em;

    .card--title {
      order: ${({ order }) => (order ? 1 : 0)};
      align-self: center;
      margin-top: 5em;
    }
  }
`;

const SectionCarousel = ({ data, typeFor, title, toLink, btnTitle, order }) => (
  <Styled className='section--carousel--media max-width' order={order}>
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

export default SectionCarousel;
