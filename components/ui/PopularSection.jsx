import React from 'react';
import styled from 'styled-components';
import CardOne from './Cards/CardOne';
import CardTitle from './CardTitle';
import ButtonSimple from './ButtonSimple';
import ButtonLink from './ButtonLink';

const Styled = styled.section`
  background: var(--bg-dark-gradient);
  padding: 4em 1em;
  position: relative;

  .content--container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    justify-items: center;
    grid-row-gap: 2em;
    grid-column-gap: 1em;
  }

  .btn--container {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }

  .card--title {
    grid-column: 1 / 3;
    justify-self: center;
    margin-bottom: 3em;
  }

  .title {
    text-transform: capitalize;
    font-weight: bold;
  }
  .subtitle {
    color: var(--grey-clr);
  }

  @media screen and (min-width: 768px) {
    .content--container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: auto;
      justify-items: center;
    }

    .card--title {
      grid-column: 1 / 5;
    }
  }
  @media screen and (min-width: 1000px) {
    &::before {
      position: absolute;
      content: '';
      bottom: 40px;
      left: 0;
      right: 0;
      width: 100%;
      margin: 0 auto;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
      z-index: 1;
    }

    .content--container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-column-gap: 0;
    }

    .card--title {
      grid-column: 1 / 3;
      margin-top: 4em;
    }
  }
`;

const PopularSection = ({
  data,
  typeFor,
  title,
  subtitle,
  toLink,
  btnTitle
}) => (
  <Styled className='popular--section'>
    <div className='max-width content--container'>
      <CardTitle title={title} subtitle={subtitle}>
        <ButtonSimple toLink={toLink} title={btnTitle} />
      </CardTitle>
      {!data ? (
        <div>Sorry Something went wrong</div>
      ) : (
        data.map((item, i) => (
          <CardOne key={item.id} data={item} typeFor={typeFor} />
        ))
      )}
    </div>
    <div className='btn--container'>
      <ButtonLink toLink={toLink} title='view more' />
    </div>
  </Styled>
);

export default PopularSection;
