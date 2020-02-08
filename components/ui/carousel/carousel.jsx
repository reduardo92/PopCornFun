import { useContext } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import styled from 'styled-components';
import MovieContext from '../../context/MovieContext';

const Styled = styled.section`
  width: 100%;
  height: 300px;

  ul {
    display: flex;
    li {
      flex-shrink: 0;
      height: 300px;
      position: relative;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${props =>
          props.heroOpacity || 'rgba(0, 0, 0, 0.65)'};
      }

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (min-width: 760px) {
    /* height: 350px; */

    ul {
      li {
        /* height: 350px; */
      }
    }
  }
`;

const Carousell = () => {
  const { setCarosuel } = useContext(MovieContext);

  const imgs = {
    0: '/man-carrying.jpg',
    1: '/bars.jpg',
    2: '/black-exercise.jpg',
    3: '/close-up-of.jpg',
    4: '/free.jpg',
    5: '/group-of-people.jpg',
    6: '/gymnastic.jpg',
    7: '/heavyBall.jpg',
    8: '/hitCardio.jpg',
    9: '/homeHero.jpg',
    10: '/boxing.jpg',
    11: '/kettebell.jpg',
    12: '/man-lying.jpg',
    13: '/people.jpg',
    14: '/person-carrying.jpg',
    15: '/secondBg.jpg',
    16: '/slide_2.jpg',
    17: '/tyre-push.jpg'
  };

  return (
    <Styled className='carousel'>
      <Carousel
        slidesPerPage={setCarosuel()}
        infinite
        autoPlay={5000}
        animationSpeed={3000}
      >
        {Object.values(imgs).map((img, i) => (
          <img key={i} src={img} alt='img' />
        ))}
      </Carousel>
    </Styled>
  );
};

export default Carousell;
