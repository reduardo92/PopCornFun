import React from 'react';
import styled from 'styled-components';

const Styled = styled.div``;
const PersonFacts = ({ data }) => {
  return (
    <Styled className='profile--facts'>
      <h3 className='subTitle'>Facts</h3>
    </Styled>
  );
};

export default PersonFacts;
