import React from 'react';
import Link from 'next/link';

const CrewTab = ({ crew }) => (
  <div className='crew--person'>
    <Link href='/person/[id]' as={`/person/${crew.id}`}>
      <a>{crew.name}</a>
    </Link>
    <small className='d-block mt-1'>
      {crew.department ? crew.department.join(', ') : 'Creator'}
    </small>
  </div>
);

export default CrewTab;

{
  /* <div className='crew--person'>
<Link href='/person/[id]' as={`/person/${crew[0].id}`}>
  <a>{crew[0].name}</a>
</Link>
<small className='d-block mt-1'>{crew[0].department.join(', ')}</small>
</div> */
}
