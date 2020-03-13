import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.div``;

const CreditsTabs = ({ data, typeFor }) => (
  <Styled className='credits--tab d-flex shadow-sm border border-light bg-light py-1 px-2'>
    <span className='date text-dark mr-4'>
      <strong>{data.date === '' ? '-' : data.date}</strong>
    </span>
    <span className='text-dark'>
      <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
        <a className='redBalckHover font-weight-bold'>
          {data.title || data.name}
        </a>
      </Link>
      <span className='d-block'>
        {data.job ? data.job : data.character ? `as ${data.character}` : ''}
      </span>
    </span>
  </Styled>
);

export default CreditsTabs;
