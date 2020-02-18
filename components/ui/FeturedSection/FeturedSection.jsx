import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button';
import { IMG_URL_OR } from '../../context/types';
import CirclePercentage from '../CirclePercentage';
import { MdPlayCircleOutline } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';

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
  }

  .fetured--content {
    width: 100%;
    max-width: 480px;
    display: grid;
    grid-gap: 1em;
    text-align: left;
    justify-items: left;
  }

  .button {
    border-radius: 5px;
  }

  .fetured--action {
    margin-top: 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
      background: transparent;
      border: none;
      color: var(--white-clr);
      font-weight: bold;
      transition: var(--ease--in--out--02s);
    }

    svg {
      margin-left: 5px;
      font-size: 2rem;
      color: var(--primary-clr);
      transition: var(--ease--in--out--02s);
    }

    &:hover button,
    &:focus button {
      opacity: 0.8;
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
    min-height: 50vh;

    .max-width {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      width: 100%;
    }

    .title {
      font-size: 2.5rem;
    }

    .fetured--action {
      flex-direction: column;
      svg {
        font-size: 8rem;
        order: -1;
        margin: 0;
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
    min-height: 80vh;

    .fetured--action {
      button {
        font-size: 1.1rem;
      }
      svg {
        font-size: 10rem;
      }
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
          <p className='subtitle'>{data.overview}</p>
          <div className='btn--group'>
            <Button toLink={`/${typeFor}/${data.id}`} title='view more' bgclr />
          </div>
        </div>
        <div className='fetured--action'>
          <button
            onClick={() => {
              setToggle(true);
            }}
          >
            play Trailer
          </button>
          <MdPlayCircleOutline />
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
