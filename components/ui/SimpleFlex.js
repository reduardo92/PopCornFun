import styled from 'styled-components';

const SimpleFlex = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-points-x: repeat(
    ${({ setWidth }) => (setWidth ? setWidth : '100%')}
  );
  scroll-snap-type: mandatory;
  margin: 1em 0;

  & > div {
    flex-shrink: 0;
    width: ${({ setWidth }) => (setWidth ? setWidth : '100%')};
    margin: 0 1em;

    &:first-child {
      margin-left: 0;
    }
  }
`;
export default SimpleFlex;
