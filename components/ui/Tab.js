import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.a`
  background-color: #fff;
  border: 1px solid #d7d7d7;
  color: #000;
  padding: 4px 10px;
  border-radius: 4px;
  transition: var(--ease--in--out--02s);
  cursor: pointer;
  font-size: 0.9rem;

  &:hover,
  &focus {
    opacity: 0.8;
  }
`;

const Tab = ({ data, typeFor, addCls }) => (
  <Link
    href={`/genre/[id]/[name]/${typeFor}`}
    as={`/genre/${data.id}/${data.name}/${typeFor}`}
  >
    <Styled className={`tab--link ${addCls}`}>{data.name}</Styled>
  </Link>
);

export default Tab;
