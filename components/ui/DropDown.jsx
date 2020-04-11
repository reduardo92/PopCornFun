import React from 'react';
import Link from '../Link';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

const Styled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em 0;

  .dropdown--button {
    color: ${({ invert }) =>
      invert ? 'var(--second-clr)' : 'var(--white-clr)'};
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: var(--ease--in--out--02s);
    text-transform: capitalize;
    font-size: 0.9rem;
    cursor: pointer;

    &:focus + ul {
      visibility: visible;
      opacity: 1;
      transform: translateY(0px);
    }

    &:hover,
    &:focus {
      outline: transparent;
      border-bottom-color: var(--grey-clr);
    }
  }

  .dropDown--ul {
    margin-top: 1.8em;
    position: absolute;
    align-self: baseline;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 6em;
    height: 6em;
    background: var(--white-clr);
    left: 0px;
    list-style: none;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.4s ease;
    border: 1px solid rgba(33, 37, 41, 0.1);

    &:last-child {
      left: -50%;
    }
  }

  .dropDown--li {
    width: 100%;
    height: 100%;
  }

  .dropdown-item {
    color: black;
    font-weight: bold;
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      border-bottom: 1px solid rgba(33, 37, 41, 0.15);
    }

    &:hover {
      background-color: var(--primary-clr);
      color: var(--white-clr);
    }
  }

  @media screen and (min-width: 768px) {
    .dropdown--button {
      font-size: 1rem;
    }

    .dropDown--ul {
      &:last-child {
        left: 0;
      }
    }
  }
`;

const DropDown = ({ items, invert, setActive, active }) =>
  items.map((item) => (
    <Styled className='dropDown' invert={invert} key={item.name}>
      <button
        onClick={() => setActive(item.name)}
        className={`dropdown--button ${active === item.name && 'activeTab'}`}
      >
        {item.name} <IoIosArrowDown className='nav--arrow' />
      </button>
      <ul className='dropDown--ul'>
        {item.dropItems.map(({ href, as, name }) => (
          <li className='dropDown--li' key={name}>
            <Link href={href} as={as}>
              <a className='dropdown-item' role='button'>
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Styled>
  ));

export default DropDown;
