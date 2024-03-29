import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

const Styled = styled(CircularProgressbar)`
  width: 55px;
  .CircularProgressbar-path {
    stroke: ${({ value }) =>
      value >= 60 ? '#09b560' : value < 60 || value > 40 ? '#D2D531' : ''};
    stroke: ${({ value }) => value < 40 && 'red'};
  }
  .CircularProgressbar-trail {
    stroke: var(--white-clr);
  }
  .CircularProgressbar-text {
    fill: var(--white-clr);
    font-weight: bold;
    font-size: 1.6rem;
  }
  .CircularProgressbar-background {
    fill: #383838;
  }

  @media screen and (min-width: 1200px) {
    width: 60px;
  }
`;

const CirclePercentage = ({ value }) => (
  <Styled
    className='circle--percentege'
    value={value}
    text={`${value}%`}
    minValue={1}
    maxValue={100}
    background
  />
);

export default CirclePercentage;
