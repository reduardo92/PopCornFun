import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import SimpleFlex from './SimpleFlex';
import CastCard from './Cards/CastCard';

const Styled = styled.section`
  padding: 1em 0;

  .subTitle {
    margin-bottom: 1.5em;
  }

  .view--more {
    display: flex;
    align-items: center;
    font-weight: bold;
    transition: var(--ease--in--out--02s);
    cursor: pointer;

    a {
      letter-spacing: 0.8px;
      color: var(--white-clr);
    }

    svg {
      transition: var(--ease--in--out--02s);
      font-size: 1rem;
    }

    &:hover,
    &:focus {
      opacity: 0.8;
      margin-bottom: 1em;
    }
    &:hover svg,
    &:focus svg {
      margin-left: 0.2em;
    }
  }
`;

const TopBilledCast = ({ data }) => {
  return (
    <Styled className='top--billed--cast'>
      <h3 className='subTitle'>Top Billed Cast</h3>
      <SimpleFlex className='simple--flex' setWidth='150px'>
        {data.map((item, i) => i < 6 && <CastCard key={item.id} data={item} />)}
        <div className='view--more'>
          <Link href='/movie/[id]/cast' as={`/movie/${data.id}/cast`}>
            <a>
              View More <FaArrowAltCircleRight />
            </a>
          </Link>
        </div>
      </SimpleFlex>
      <Link href='/movie/[id]/cast' as={`/movie/${data.id}/cast`}>
        <a className='title redHover'>Full Cast & Crew</a>
      </Link>
    </Styled>
  );
};

export default TopBilledCast;
