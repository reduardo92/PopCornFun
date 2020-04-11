import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from '../../Link';
import CirclePercentage from '../CirclePercentage';

const Styled = styled.section`
  padding: 0.5em 0;
  background: url('/userProfileBg.svg') no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  /* z-index: 1; */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to top,
      #1c0c07,
      #1e0d07,
      #200e08,
      #210e08,
      #230f08
    );
    z-index: -1;
    opacity: 0.97;
  }

  .inner_content {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-row-gap: 1em;
  }

  .userprofile--head__logo {
    justify-self: center;
    background: red;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    transition: var(--ease-12s);
    cursor: pointer;

    &--link {
      display: block;
      height: 100%;
      width: 100%;
      font-size: 3rem;
      transition: var(--ease-12s);
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: center;

      &:hover,
      &:focus {
        color: var(--white-clr);
        opacity: 0.7;
      }
    }

    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }

  .userprofile--head__user {
    align-self: center;
    justify-self: center;

    &--name {
      font-weight: bold;
      font-size: 1.625rem;
      margin: 0;

      .user--link {
        transition: var(--ease-12s);
        line-height: 1;
      }

      &:hover .user--link,
      &:focus .user--link {
        opacity: 0.7;
        color: var(--primary-clr);
      }
    }

    &--member {
      font-size: 0.9rem;
      opacity: 0.7;
    }
  }

  .userprofile--head__votes {
    grid-column: 1 / -1;
    display: flex;

    .vote {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      text-align: center;
      font-size: 0.9rem;

      .average {
        padding-top: 0.5em;
      }
      &:first-child {
        border-right: 1px solid rgba(255, 255, 255, 0.3);
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2em 0;

    .inner_content {
      grid-template-areas: 'logo user user' 'logo vote vote';
      grid-template-columns: auto 1fr 1fr;
      grid-row-gap: 0;
    }

    .userprofile--head__logo {
      align-self: center;
      grid-area: logo;
      height: 140px;
      width: 140px;

      &--link {
        font-size: 4rem;
      }
    }

    .userprofile--head__user {
      grid-area: user;
      justify-self: baseline;
      align-self: end;
      margin-left: 1.7em;
      display: flex;
      align-self: end;
      align-items: center;
      margin-bottom: 1em;

      &--name {
        font-size: 1.8rem;
      }

      &--member {
        margin-left: 1em;
        margin-top: 0.5em;
      }
    }

    .userprofile--head__votes {
      grid-area: vote;
      align-items: center;
      align-self: center;
      max-width: 400px;

      .vote {
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .average {
          padding-top: 0;
          padding-left: 1em;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .inner_content {
      max-width: 1000px;
      grid-column-gap: 1em;
    }
  }
`;

const UserProfileHead = () => {
  const { asPath } = useRouter();
  return (
    <Styled className='useProfileHead'>
      <div className='inner_content '>
        <div className='userprofile--head__logo'>
          <Link href={asPath}>
            <a className='userprofile--head__logo--link'>R</a>
          </Link>
        </div>
        <div className='userprofile--head__user'>
          <h2 className='userprofile--head__user--name'>
            <Link href={asPath}>
              <a className='user--link'>r.eduardo92</a>
            </Link>
          </h2>
          <span className='userprofile--head__user--member'>
            Member since February 2019
          </span>
        </div>
        <div className='userprofile--head__votes'>
          <div className='vote'>
            <CirclePercentage value={5 * 10} />
            <span className='average'>
              Average <br /> Movie Score
            </span>
          </div>
          <div className='vote'>
            <CirclePercentage value={6 * 10} />
            <span className='average'>
              Average <br /> Tv Score
            </span>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default UserProfileHead;
