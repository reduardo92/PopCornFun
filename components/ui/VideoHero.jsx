import React from 'react';
import styled from 'styled-components';
import Button from './button';

const Styled = styled.div`
  position: relative;
  min-height: 75vh;
  margin-top: 6.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);

  .video--bg,
  .bg--mobile {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
    background-color: black;
  }

  .video--bg {
    display: none;
  }

  .bg--mobile {
    background-image: url(/popcornBg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .content {
    position: relative;
    padding: 0 0.5em;
  }

  .title {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.5em;
    span {
      display: block;
      line-height: 1.2;
}
    }
  }

  .subtitle {
    color: var(--white-clr);
    font-size: 1rem;
  }

  .title--img {
    position: absolute;
    width: 100px;
  }

  .btn--group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
  background: rgba(0, 0, 0, 0.55);

  .video--bg {
    display: block;
  }

  .bg--mobile {
    display: none;
  }
    
  }
  @media screen and (min-width: 1000px) {
    .title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.4rem;
    }

    .btn--group {
      grid-gap: 1em;
      max-width: 375px;
      margin: 0 auto;
    }
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
        <Button title='tv' toLink='/tv' />
      </div>
      {/* <img className='title--img' src='/popcorn.png' alt='film strip' /> */}
    </div>
    <video autoPlay muted loop className='video--bg'>
      <source src='/filmsbg.mp4' type='video/mp4' />
    </video>
    <div className='bg--mobile' />
  </Styled>
);

export default VideoHero;
