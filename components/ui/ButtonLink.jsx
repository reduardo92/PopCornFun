import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.a`
  display: ${({ styleDisplay }) => (styleDisplay ? 'block' : 'inline-block')};
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  background: ${({ bgclr }) => (bgclr ? bgclr : 'var(--primary-clr)')};
  color: ${props => (props.invert ? 'var(--second-clr)' : 'var(--white-clr)')};
  text-transform: capitalize;
  padding: 0.8em 2em;
  border-radius: 0.25em;
  position: relative;
  transition: var(--ease-12s);
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;

const ButtonLink = ({
  toLink,
  asLink,
  title,
  hoverclr,
  bgclr,
  styleDisplay,
  invert
}) => (
  <Link href={toLink} as={asLink}>
    <Styled
      hoverclr={hoverclr}
      bgclr={bgclr}
      styleDisplay={styleDisplay}
      invert={invert}
      className='button--link'
    >
      {title}
    </Styled>
  </Link>
);

export default ButtonLink;
