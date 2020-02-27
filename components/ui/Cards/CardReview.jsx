import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Styled = styled.div`
  background-color: #f2f2f4;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1em;
  color: var(--second-clr);
  border-radius: 5px;
  max-width: 300px;
  display: grid;
  grid-gap: 1em;

  .card--review__head {
    text-align: center;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: center;
    align-items: center;
  }

  .avatar {
    width: 75px;
    height: 75px;
    border: 5px solid var(--primary-clr);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: #f2f2f4;
    color: var(--second-clr);
    text-transform: uppercase;
    cursor: pointer;
  }

  .info {
    .author {
      font-weight: bold;
      color: var(--primary-clr);
      text-transform: capitalize;
      cursor: pointer;
    }
    .review--date {
      color: var(--second-clr);
      font-size: 0.86rem;
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    .rating {
      font-size: 0.9em;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: space-evenly;
      background-color: #000;
      border-color: #000;
      border-radius: 10px;
      color: #fff;
      width: 65px;
      margin: 0 auto;

      svg {
        color: var(--primary-clr);
      }
    }
  }

  .description {
    word-break: break-all;
    margin-top: 1em;
  }

  .full--review {
    color: var(--primary-clr);
    font-weight: bold;
    background-color: #fff;
    justify-self: center;
    align-self: center;
    padding: 0.5em 0.8em;
    cursor: pointer;
    transition: var(--ease--in--out--02s);
    border-radius: 5px;

    &:hover,
    &:focus {
      opacity: 0.8;
      color: var(--second-clr);
    }
  }
`;

const CardReview = ({ data }) => {
  return (
    <Styled className='card--review'>
      <div className='card--review__head'>
        <Link href='/movie/[id]/reviews' as={`/movie/${data.id}/reviews`}>
          <div className='avatar'>{data.author.slice(0, 2)}</div>
        </Link>
        <div className='info'>
          <Link href='/movie/[id]/reviews' as={`/movie/${data.id}/reviews`}>
            <a className='author'>{data.author}</a>
          </Link>
          <p className='review--date'>Nov 25, 2019</p>
          <div className='rating'>
            <FaStar />
            9.0
          </div>
        </div>
      </div>
      <div className='description'>{`${data.content.slice(0, 250)}...`}</div>
      {data.content.length > 250 && (
        <Link href='/movie/[id]/reviews' as={`/movie/${data.id}/reviews`}>
          <a className='full--review'>Read full review</a>
        </Link>
      )}
    </Styled>
  );
};

export default CardReview;
