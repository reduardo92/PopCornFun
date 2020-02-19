import styled from 'styled-components';
import Link from 'next/link';
import { MdFormatListBulleted, MdStar } from 'react-icons/md';
import { IoMdHeart, IoMdBookmark } from 'react-icons/io';

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;

  .tag {
    border: 2px solid var(--white-clr);
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.2);
    color: #000;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 6px;
    color: var(--white-clr);
    transition: var(--ease--in--out--02s);
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--second-clr);
      background-color: var(--white-clr);
    }
  }
`;

const TagGroup = () => (
  <Styled className='tag--group'>
    <Link href='/login'>
      <a>
        <MdFormatListBulleted className='tag' />
      </a>
    </Link>
    <Link href='/login'>
      <a>
        <IoMdHeart className='tag' />
      </a>
    </Link>
    <Link href='/login'>
      <a>
        <IoMdBookmark className='tag' />
      </a>
    </Link>
    <Link href='/login'>
      <a>
        <MdStar className='tag' />
      </a>
    </Link>
  </Styled>
);

export default TagGroup;
