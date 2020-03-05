import React from 'react';
import styled from 'styled-components';
import Tab from '../../Tab';

const Styled = styled.div``;

const Keyords = ({ data }) => (
  <Styled className='profile--stats--genres'>
    <h3 className='title'>Keywords</h3>
    <div className='flex-w-container'>
      {data.keywords.keywords.map(item => (
        <Tab data={item} typeFor={data.typeFor} key={item.id} />
      ))}
    </div>
  </Styled>
);

export default Keyords;
