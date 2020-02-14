import React from 'react';
import styled from 'styled-components';
import CardOne from '../Cards/CardOne';
import CardTitle from '../CardTitle';
import ButtonSimple from '../ButtonSimple';
import Carousell from '../carousel/carousel';

const Styled = styled.section`
  padding: 2em 0 0;
`;

const SectionCarousel = ({ data, typeFor, title, toLink, btnTitle }) => {
  return (
    <Styled className='section--carousel--media'>
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
