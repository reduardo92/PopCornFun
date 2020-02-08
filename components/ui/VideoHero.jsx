import React from 'react';
import styled from 'styled-components';
import Button from './button';

const Styled = styled.div`
  position: relative;
  min-height: 75vh;
  margin-top: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  color: var(--white-clr);

  .video--bg {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .content {
    position: relative;
  }

  .title {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    span {
      display: block;
    }
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .title--img {
    position: absolute;
    width: 100px;
  }

  .btn--group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
    gap: 0.5em;
    max-width: 70%;
    margin: 0 auto;
  }
`;

const VideoHero = () => (
  <Styled className='hero--video'>
    <div className='content'>
      <h1 className='title'>
        ENTERTAINMENT <span>YOU CAN SNACK ON</span>
      </h1>
      <p className='subtitle'>
        Discover your next popcorn fun to enjoy your night
      </p>
      <div className='btn--group'>
        <Button title='movies' toLink='/movie' />
        <Button title='tv shows' toLink='/tv' />
      </div>
      {/* <img className='title--img' src='/popcorn.png' alt='film strip' /> */}
    </div>
    <video autoPlay muted loop className='video--bg'>
      <source src='/filmsbg.mp4' type='video/mp4' />
    </video>
  </Styled>
);

export default VideoHero;
