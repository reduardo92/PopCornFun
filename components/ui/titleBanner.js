import styled from 'styled-components';

const Styled = styled.div`
  position: relative;
  max-width: fit-content;
  margin: 0 auto;

  .title,
  .subtitle {
    position: relative;
    width: 100%;
    display: block;
    font-family: var(--fn-monterrat);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
  }

  .title {
    color: var(--primary-clr);
    width: fit-content;
    margin: 0 auto;
    font-size: 1.1rem;
    padding: ${props => (props.padd ? props.padd : ' 0 35px')};
    &::after,
    &::before {
      content: '';
      position: absolute;
      height: 30px;
      width: 30px;
      top: 43%;
      transform: translateY(-50%);
      background-size: cover;
    }

    &::before {
      background-image: url(leftTitle.png);
      left: 0;
    }

    &::after {
      background-image: url(rightTitle.png);
      right: 0;
    }
  }

  .subtitle {
    color: ${props =>
      props.invert ? 'var(--white-clr)' : 'var(--second-clr)'};
    font-size: 1.8rem;
  }
`;

const TitleBanner = ({ subtitle, title, invert, padd }) => (
  <Styled className='title--banner' invert={invert} padd={padd}>
    <h2 className='title'>{title}</h2>
    <h3 className='subtitle'>{subtitle}</h3>
  </Styled>
);

export default TitleBanner;
