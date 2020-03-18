import React from 'react';
import styled from 'styled-components';
import Tab from '../../Tab';

const Styled = styled.div`
  .flex-w-container {
    max-width: 300px;
  }
`;

const Keyords = ({ data, typeFor }) => (
  <Styled className='profile--stats--genres'>
    <h3 className='title'>Keywords</h3>
    <div className='flex-w-container'>
      {data.length === 0
        ? '-'
        : data.map(item => <Tab data={item} typeFor={typeFor} key={item.id} />)}
    </div>
  </Styled>
);

export default Keyords;
