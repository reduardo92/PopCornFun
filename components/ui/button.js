import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.a`
  display: inline-block;
  font-family: var(--fn-monterrat);
  font-weight: var(--fw-bold);
  font-size: 0.9rem;
  text-align: center;
  background-color: ${props =>
    props.bgclr ? 'var(--primary-clr)' : 'transparent'};
  color: ${props => (props.invert ? 'var(--second-clr)' : 'var(--white-clr)')};
  text-transform: uppercase;
  padding: 1em 3.2em;
  border-radius: 40px;
  border: 2px solid var(--primary-clr);
  position: relative;
  transition: var(--ease--in--out--02s);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(0.95);
    background-color: ${props =>
      props.bgclr ? 'transparent' : 'var(--primary-clr)'};
    border-color: var(--primary-clr);
    color: ${props =>
      props.hoverclr ? 'var(--white-clr)' : 'var(--second-clr)'};
    cursor: pointer;
  }
`;

const Button = ({ toLink, title, hoverclr, bgclr, invert }) => (
  <Link href={toLink}>
    <Styled
      hoverclr={hoverclr}
      bgclr={bgclr}
      invert={invert}
      className='button'
    >
      {title}
    </Styled>
  </Link>
);

export default Button;
