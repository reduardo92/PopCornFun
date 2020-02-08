import { useContext } from 'react';
import StateContext from '../../context/StateContext';
import Carousel from '@brainhubeu/react-carousel';
import styled from 'styled-components';
import Barbell from '../Barbell';
import testimoniesData from './testimoniesData';
import TitleBanner from '../titleBanner';
import TestimoniesCard from './TestimoniesCard';

const Styled = styled.section`
  padding: 5em 1em;
  text-align: center;

  .barbell {
    margin: 0;
    margin-top: 1em;
  }

  .container {
    display: flex;
  }

  .card--tesimonies {
    flex-shrink: 1;
  }

  .carousel--container {
    width: 100%;
    height: 430px;
  }

  .BrainhubCarousel__trackContainer {
    margin-top: 5em;
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      flex: 45%;
    }
  }
  .barbell {
    max-width: 500px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .carousel--container {
      height: 300px;
    }
  }
`;

const Testimonies = () => {
  const { setCarosuel } = useContext(StateContext);

  return (
    <Styled className='testimoneis'>
      <TitleBanner title='testimonies' subtitle='what our memebers say' />
      <Barbell />
      <div className='carousel--container'>
        <Carousel
          slidesPerPage={setCarosuel(2, 3)}
          infinite
          centered
          autoPlay={5000}
          animationSpeed={2000}
        >
          {testimoniesData.map(item => (
            <TestimoniesCard key={item.id} data={item} />
          ))}
        </Carousel>
      </div>
    </Styled>
  );
};

export default Testimonies;
