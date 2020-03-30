import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IMG_URL } from '../../context/types';

const Styled = styled.div`
  width: 160px;
  display: grid;
  grid-template-rows: 240px auto;

  .person--profile {
    background-color: var(--grey-clr);
    .person--profile__link--img {
      transition: var(--ease--in--out--02s);
    }

    &:hover .person--profile__link--img {
      opacity: 0.5;
    }
  }

  .name {
    font-weight: bold;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      color: var(--primary-clr);
    }
  }

  .job {
    display: block;
  }

  .know--for {
    font-size: 0.7rem;
    margin-top: 0.1em;

    &__item {
      margin-right: 0.3em;
      transition: var(--ease--in--out--02s);

      &:hover,
      &:focus {
        color: var(--primary-clr);
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 300px;
    grid-template-rows: 400px auto;

    .person--body__title {
      display: flex;
      align-items: baseline;
    }

    .name {
      font-size: 1.1rem;
    }
    .job {
      display: inline-block;
      margin-left: auto;
      font-size: 0.9rem;
    }

    .know--for {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 1000px) {
    .name {
      font-size: 1.3rem;
    }
    .job {
      font-size: 1rem;
    }

    .know--for {
      font-size: 0.9rem;
    }
  }
`;

const PersonCard = ({ data }) => (
  <Styled className='person--card'>
    <div className='person--profile'>
      <Link href={`/person/[id]`} as={`/person/${data.id}`}>
        <a className='person--profile__link'>
          <img
            className='person--profile__link--img'
            src={
              data.profile_path
                ? `${IMG_URL}${data.profile_path}`
                : 'no_img.jpg'
            }
            alt={data.title || data.name}
          />
        </a>
      </Link>
    </div>
    <div className='person--body'>
      <div className='person--body__title'>
        <Link href={`/person/[id]`} as={`/person/${data.id}`}>
          <a className='name'>{data.name}</a>
        </Link>
        <small className='job'>({data.known_for_department})</small>
      </div>
      <div className='know--for'>
        {!data.known_for
          ? 'N/A'
          : data.known_for.map((item, i) => (
              <Link
                key={item.id}
                href={`/${item.media_type}/[id]`}
                as={`/${item.media_type}/${item.id}`}
              >
                <a className='know--for__item'>
                  {item.name || item.title}
                  {data.known_for.length - 1 === i ? '' : ', '}
                </a>
              </Link>
            ))}
      </div>
    </div>
  </Styled>
);

export default PersonCard;
