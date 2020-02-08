import styled from 'styled-components';
import Button from './button';
import Fade from 'react-reveal/Fade';

const Styled = styled.div`
  padding: 0 0.5em;
  text-align: center;
  .title {
    font-family: var(--fn-monterrat);
    text-transform: uppercase;
    margin-bottom: 1em;
    font-size: 2.5rem;
    line-height: 1;

    span {
      display: block;
    }
  }

  .btn--group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
    gap: 0.5em;
  }

  @media screen and (min-width: 1024px) {
    .title {
      font-size: 4rem;
      line-height: 0.5;
      margin: ${props => props.banner === 'home' && '0'};
    }

    .button {
      font-size: 1rem;
    }
  }
`;

const Banner = ({ banner, bannerTitle, btnTwo }) => {
  return (
    <Styled banner={banner}>
      <Fade bottom>
        <h1 className='title'>
          {banner === 'home' ? 'entertainment for your snack' : bannerTitle}
        </h1>
        {banner === 'home' ? (
          <Fade top delay={500}>
            <Button title='join now!' toLink='/contact' />
          </Fade>
        ) : (
          <Fade top delay={500}>
            <div className='btn--group'>
              <Button title='home' toLink='/' />
              <Button title={btnTwo} toLink={`/${btnTwo}`} />
            </div>
          </Fade>
        )}
      </Fade>
    </Styled>
  );
};

export default Banner;
