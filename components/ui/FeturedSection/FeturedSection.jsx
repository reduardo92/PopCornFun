import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '../button';
import { IMG_URL_OR } from '../../context/types';
import CirclePercentage from '../CirclePercentage';
import TagGroup from '../TagGroup';
import PlayButton from '../PlayButton';
import MovieContext from '../../context/MovieContext';

const Styled = styled.section`
  position: relative;
  min-height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url(${({ bgImg }) => `${IMG_URL_OR}${bgImg}`}) no-repeat center;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  padding: 2em 0;
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

  .fetured--action {
    margin-left: 8px;
  }

  .heading {
    display: flex;
    width: 100%;
    align-items: center;

    svg {
      width: 55px;
      flex: 0 0 55px;
    }
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
  }

  @media screen and (min-width: 1200px) {
    min-height: 600px;
    background-position: center 40%;

    .btn--group {
      grid-template-columns: auto 1fr;
    }
  }
`;

const FeturedSection = ({ data, typeFor }) => {
  const { setData } = useContext(MovieContext);

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
          <PlayButton onclick={() => setData(data.videos.key)} />
        </div>
      </div>
    </Styled>
  );
};

export default FeturedSection;
