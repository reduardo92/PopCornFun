import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IMG_URL } from '../../context/types';

const Styled = styled.div`
  /* width: 150px; */
  /* height: 200px; */

  .card--poster {
    width: 100%;
    height: 230px;
    cursor: pointer;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .name {
    font-weight: bold;
    font-size: 1rem;
    margin: 1em 0 0.4em;
    cursor: pointer;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  .character {
    font-size: 12px;
    opacity: 0.8;
  }
`;

const CastCard = ({ data }) => (
  <Styled className='cast--card'>
    <Link href='/person/[id]' as={`/person/${data.id}`}>
      <div className='card--poster'>
        <img
          className='cast--card__img'
          // src={`${IMG_URL}${data.profile_path}`}
          alt={data.title || data.name}
          src={
            data.profile_path
              ? `${IMG_URL}${data.profile_path}`
              : 'blank_Person.svg'
          }
        />
      </div>
    </Link>
    <Link href='/person/[id]' as={`/person/${data.id}`}>
      <h4 className='name'>{data.name}</h4>
    </Link>
    <div className='character'>{data.character}</div>
  </Styled>
);

export default CastCard;
