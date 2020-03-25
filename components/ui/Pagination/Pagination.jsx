import React, { useContext } from 'react';
import styled from 'styled-components';
import MovieContext from '../../context/MovieContext';
import createPagination from './createPagination';
import Link from 'next/link';
import { useState } from 'react';
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateNext,
  MdNavigateBefore
} from 'react-icons/md';

const Styled = styled.div`
  ul {
    list-style: none;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;

    li {
      margin-right: 4px;
      border-radius: 4px;
      font-family: sans-serif;
      background: var(--white-clr);
      font-size: 1rem;
      font-weight: bold;
      min-width: 20px;
      text-align: center;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;

      .link--item {
        display: block;
        padding: 10px 15px;
        color: var(--second-clr);
      }

      .controls {
        font-size: 0.9rem;
      }

      &:last-child {
        margin-right: 0px;
      }

      &:not(.active):not(.disabled) {
        cursor: pointer;
      }
      &:not(.active):not(.disabled):hover {
        background: var(--bg-gradient);
        .link--item {
          color: var(--white-clr);
        }
      }

      &:not(.active):not(.disabled):active {
        background: rgb(245, 110, 67);
        .link--item {
          color: var(--white-clr);
        }
      }

      &.active {
        background: rgb(245, 110, 67);
        .link--item {
          color: var(--white-clr);
        }
      }
      &.disabled {
        background: #fbeaff;
        pointer-events: none;
      }
    }
  }
`;

const Pagination = ({
  numberOfArticles,
  articlesPerPage = 1,
  numberOfButtons = 5,
  typeFor
}) => {
  const { paginate, currentPage, windowSize } = useContext(MovieContext);

  const numberBB = () =>
    windowSize >= 768 ? numberOfButtons + 5 : numberOfButtons;

  const { pagination } = createPagination({
    numberOfArticles,
    articlesPerPage,
    numberOfButtons: numberBB(),
    currentPage
  });

  return (
    <Styled className='pagination--section' numberOfButtons={numberOfButtons}>
      <ul>
        <li
          className={`${pagination[0] === currentPage && 'disabled d-none'}`}
          onClick={() => paginate(1)}
        >
          <Link href={typeFor + 1}>
            <a className='link--item controls'>
              <MdFirstPage className='icons' />
            </a>
          </Link>
        </li>
        <li
          className={`${pagination[0] === currentPage && 'disabled d-none'}`}
          onClick={() => paginate(currentPage - 1)}
        >
          <Link
            href={currentPage === 1 ? typeFor + 1 : typeFor + (currentPage - 1)}
          >
            <a className='link--item controls'>Prev</a>
          </Link>
        </li>
        {pagination.map(page => (
          <li
            key={page}
            className={`${currentPage === page && 'active'}`}
            onClick={() => paginate(page)}
          >
            <Link href={typeFor + page}>
              <a className='link--item'>{page}</a>
            </Link>
          </li>
        ))}
        <li
          className={`${pagination.reverse()[0] === currentPage &&
            'disabled d-none'}`}
          onClick={() => paginate(currentPage + 1)}
        >
          <Link href={typeFor + (currentPage + 1)}>
            <a className='link--item controls'>Next</a>
          </Link>
        </li>
        <li
          className={`${numberOfArticles === currentPage && 'disabled d-none'}`}
          onClick={() => paginate(numberOfArticles)}
        >
          <Link href={typeFor + numberOfArticles}>
            <a className='link--item controls'>
              <MdLastPage className='icons' />
            </a>
          </Link>
        </li>
      </ul>
    </Styled>
  );
};

export default Pagination;

{
  /* <li
className={`${currentPage === page && 'active'}`}
onClick={() => paginate(page)}
>
{page}
</li> */
}
