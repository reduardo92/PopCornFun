import styled from 'styled-components';

const TabStyled = styled.button`
  color: ${props => (props.active ? 'var(--second-clr)' : 'var(--white-clr)')};
  background-color: ${props =>
    props.active ? 'transparent' : 'var(--second-clr)'};
  padding: 1em 3.2em;
  border-radius: 40px;
  border: 2px solid var(--primary-clr);
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  transition: var(--ease--in--out--02s);
  border: 3px solid
    ${props => (props.active ? 'var(--second-clr)' : 'transparent')};
  outline-color: ${props =>
    props.active ? 'transparent' : 'var(--second-clr);'};
  transform: ${props => (props.active ? 'scale(0.95)' : '')};
  cursor: pointer;

  &:hover,
  &focus {
    color: ${props => (props.color ? 'var(--second-clr)' : 'var(--white-clr)')};
    transform: scale(0.95);
    background-color: transparent;
    border-color: var(--second-clr);
    outline-color: var(--second-clr);
    cursor: pointer;
  }
`;

export default TabStyled;
