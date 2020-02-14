import { useContext } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import styled from 'styled-components';
import MovieContext from '../../context/MovieContext';

const Styled = styled(Carousel)`
  width: 100%;
  height: fit-content;
  padding: 1em 1em 0;
  overflow: hidden;

  ul {
    display: flex;

    li {
      height: fit-content;
      min-height: 100%;
    }
  }

  @media screen and (min-width: 760px) {
    ul li {
      width: 160px !important;
      min-width: 160px !important;
      margin: 0 5px;
    }
  }
`;

const Carousell = ({ children }) => {
  const { setCarosuel } = useContext(MovieContext);

  return (
    <Styled
      className='carousel'
      slidesPerPage={setCarosuel()}
      infinite
      autoPlay={6000}
      animationSpeed={3000}
    >
      {children}
    </Styled>
  );
};

export default Carousell;
