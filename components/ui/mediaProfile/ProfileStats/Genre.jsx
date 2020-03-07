import React from 'react';
import styled from 'styled-components';
import Tab from '../../Tab';

const Styled = styled.div``;

const Genre = ({ data, typeFor }) => (
  <Styled className='profile--stats--genres'>
    <h3 className='title'>Genres</h3>
    <div className='flex-w-container'>
      {data.map(item => (
        <Tab data={item} typeFor={typeFor} key={item.id} />
      ))}
    </div>
  </Styled>
);

export default Genre;
