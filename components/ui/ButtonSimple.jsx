import styled from 'styled-components';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';

const Styled = styled.a`
  /* display: inline-block; */
  font-family: var(--fn-monterrat);
  font-weight: var(--fw-bold);
  font-size: 0.9rem;
  text-align: center;
  color: ${props => (props.invert ? 'var(--second-clr)' : 'var(--white-clr)')};
  text-transform: uppercase;
  position: relative;
  transition: var(--ease--in--out--02s);
  cursor: pointer;
  display: flex;
  align-items:center;
  
  svg {
    font-size: 1.5rem;
  }

  &:hover,
  &:focus {
    /* color: ${props =>
      props.hoverclr ? 'var(--white-clr)' : 'var(--primary-clr)'}; */
      color: var(--primary-clr) !important;
      
      svg {
        margin-left: 4px;
      }
  }


`;

const ButtonSimple = ({ toLink, title = 'view more', hoverclr, invert }) => (
  <Link href={toLink}>
    <Styled hoverclr={hoverclr} invert={invert} className='button--simple'>
      {title} <MdChevronRight />
    </Styled>
  </Link>
);

export default ButtonSimple;
