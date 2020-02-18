import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button';
import { IMG_URL_OR } from '../../context/types';
import CirclePercentage from '../CirclePercentage';
import { FaPlayCircle } from 'react-icons/fa';
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

  .heading {
    display: flex;
    width: 100%;
    align-items: flex-end;
  }

  .title {
    margin-bottom: 0;
    margin-right: 0.5em;
  }

  @media screen and (min-width: 768px) {
    min-height: 50vh;
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
          <FaPlayCircle />
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
