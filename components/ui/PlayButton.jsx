import styled from 'styled-components';
import { MdPlayCircleOutline } from 'react-icons/md';

const Styled = styled.button`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  color: var(--white-clr);
  font-weight: bold;
  transition: var(--ease--in--out--02s);

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 100%;
    transition: var(--ease--in--out--02s);
    background-color: var(--primary-clr);
    transform: scale(0);
    transform-origin: left;
  }

  svg {
    margin-left: 5px;
    font-size: 2rem;
    color: var(--primary-clr);
    transition: var(--ease--in--out--02s);
  }

  &:hover,
  &:focus {
    opacity: 0.8;
    outline: none;
  }

  &:hover::before,
  &:focus::before {
    transform: scale(1);
  }

  &:hover svg,
  &:focus svg {
    opacity: 0.8;
    margin-left: 15px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    padding-bottom: 10px;
    font-size: 1.2rem;

    &::before {
      width: 110px;
      margin: 0 auto;
      transform-origin: bottom;
    }

    svg {
      font-size: 12rem;
      order: -1;
      margin: 0;
    }

    &:hover svg,
    &:focus svg {
      margin-left: 0;
      margin-bottom: 10px;
      transform: scale(0.98);
    }
  }
`;

const PlayButton = ({ title = 'play trailer', onclick }) => (
  <Styled onClick={onclick} className='play--button'>
    {title}
    <MdPlayCircleOutline />
  </Styled>
);

export default PlayButton;
