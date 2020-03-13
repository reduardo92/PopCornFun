import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Styled = styled.div`
  .crew--person__link {
    cursor: pointer;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      color: var(--primary-clr);
    }
  }
`;

const CrewTab = ({ crew }) => (
  <Styled className='crew--person'>
    <Link href='/person/[id]' as={`/person/${crew.id}`}>
      <a className='crew--person__link'>{crew.name}</a>
    </Link>
    <small className='d-block mt-1'>
      {crew.department ? crew.department.join(', ') : 'Creator'}
    </small>
  </Styled>
);

export default CrewTab;
