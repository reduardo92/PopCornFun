import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button';
import { IMG_URL_OR } from '../../context/types';
import CirclePercentage from '../CirclePercentage';
import { MdPlayCircleOutline } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import TagGroup from '../TagGroup';

const Styled = styled.section`
  position: relative;
  min-height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url(${({ bgImg }) => `${IMG_URL_OR}${bgImg}`}) no-repeat center;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .max-width {
    padding: 0 1em;
    display: grid;
    grid-gap: 2.2em;
  }

  .fetured--content {
    width: 100%;
    max-width: 540px;
    display: grid;
    grid-gap: 1em;
    text-align: left;
    justify-items: left;
  }

  .btn--group {
    width: 100%;
    display: grid;
    justify-items: start;
    grid-gap: 1.5em;
    align-items: center;
  }

  .tags--group {
    display: flex;
    justify-content: space-between;
    width: 200px;
    .tag {
      border: 2px solid var(--white-clr);
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.2);
      color: #000;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      padding: 6px;
      color: var(--white-clr);
      transition: var(--ease--in--out--02s);

      &:hover,
      &:focus {
        color: var(--second-clr);
        background-color: var(--white-clr);
      }
    }
  }

  .fetured--action {
    margin-left: 8px;

    button {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: transparent;
      border: none;
      outline: none;
      color: var(--white-clr);
      font-weight: bold;
      transition: var(--ease--in--out--02s);

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        width: 100%;
        transition: var(--ease--in--out--02s);
        background-color: var(--primary-clr);
        transform: scale(0);
        transform-origin: left;
      }

      svg {
        margin-left: 5px;
        font-size: 2rem;
        color: var(--primary-clr);
        transition: var(--ease--in--out--02s);
      }
    }

    &:hover button,
    &:focus button {
      opacity: 0.8;
    }

    &:hover button::before,
    &:focus button::before {
      transform: scale(1);
    }

    &:hover svg,
    &:focus svg {
      opacity: 0.8;
      margin-left: 15px;
    }
  }

  .heading {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .title {
    margin-bottom: 0;
    margin-right: 0.5em;
  }

  @media screen and (min-width: 768px) {
    min-height: 60vh;

    .max-width {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      width: 100%;
    }

    .heading svg {
      width: 75px;
      flex: 0 0 75px;
    }

    .title {
      font-size: 2.5rem;
    }

    .fetured--action {
      button {
        flex-direction: column;
        padding-bottom: 10px;
        font-size: 1.2rem;

        &::before {
          width: 110px;
          margin: 0 auto;
          height: 2px;
          transform-origin: bottom;
        }

        svg {
          font-size: 12rem;
          order: -1;
          margin: 0;
        }
      }

      &:hover svg,
      &:focus svg {
        margin-left: 0;
        margin-bottom: 10px;
        transform: scale(0.98);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    min-height: 600px;
    background-position: unset;

    .fetured--action {
      button {
        font-size: 1.1rem;
      }
    }

    .btn--group {
      grid-template-columns: auto 1fr;
    }
  }
`;

const FeturedSection = ({ data, typeFor }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Styled className='fetured' bgImg={data.backdrop_path}>
      <div className='max-width'>
        <div className='fetured--content'>
          <div className='heading'>
            <h2 className='title'>{data.title || data.name}</h2>
            <CirclePercentage value={data.vote_average * 10} />
          </div>
          <p className='subtitle'>
            {data.overview.length > 545
              ? `${data.overview.slice(0, 545)}...`
              : data.overview}
          </p>
          <div className='btn--group'>
            <Button toLink={`/${typeFor}/${data.id}`} title='view more' bgclr />
            <TagGroup />
          </div>
        </div>
        <div className='fetured--action'>
          <button
            onClick={() => {
              setToggle(true);
            }}
          >
            play Trailer
            <MdPlayCircleOutline />
          </button>
        </div>
      </div>

      <Modal centered size='lg' show={toggle} onHide={() => setToggle(false)}>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            className='embed-responsive-item'
            src={`https://www.youtube.com/embed/${data.videos.key}`}
            allowFullScreen
          />
        </div>
      </Modal>
    </Styled>
  );
};

export default FeturedSection;
