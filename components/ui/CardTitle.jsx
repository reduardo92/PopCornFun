import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  grid-column: ${({ gridColum }) => gridColum};
  text-align: center;
  width: 100%;
  position: relative;
  padding: 1em 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100px;
    margin: 0 auto;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
  }

  .title {
    text-transform: capitalize;
    font-weight: bold;
  }
  .subtitle {
    color: var(--grey-clr);
  }

  .button--simple {
    display: block;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    padding-top: 1em;
  }

  @media screen and (min-width: 1000px) {
    max-width: 300px;
    margin-right: auto;
    text-align: left;

    &::before {
      margin: 0;
    }

    .button--simple {
      text-align: left;
    }
  }
`;

const CardTitle = ({ title, subtitle, children, gridColum }) => (
  <Styled className='card--title' gridColum={gridColum}>
    <h2 className='title'>{title}</h2>
    <p className='subtitle'>{subtitle}</p>
    {children}
  </Styled>
);

export default CardTitle;
