import styled from 'styled-components';
import Link from 'next/link';
import { MdFormatListBulleted, MdStar } from 'react-icons/md';
import { IoMdHeart, IoMdBookmark } from 'react-icons/io';
import { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';
import MovieContext from '../context/MovieContext';
import AlertContext from '../context/alert/AlertContext';

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

  .tag--btn {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      background-color: var(--white-clr);
      width: 150px;
      border-radius: 5px;
      height: 2em;
      top: 2.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
    }

    &:focus {
      outline: none;
    }

    &:hover:first-child::before {
      content: 'Add to list';
      opacity: 1;
    }

    &:hover:nth-child(2)::before {
      content: 'Add to favorite';
      opacity: 1;
    }
    &:hover:nth-child(3)::before {
      content: 'Add to watchlist';
      opacity: 1;
    }
    &:hover:nth-child(4)::before {
      content: 'Add Rating';
      opacity: 1;
      left: -17vw;
    }
  }

  .disabled {
    &:hover::before {
      content: 'Please log in' !important;
    }
  }

  @media screen and (min-width: 690px) {
    .tag--btn {
      &:hover:nth-child(4)::before {
        left: 0;
      }
    }
  }
`;

const TagGroup = ({ media }) => {
  const { isAuthentucated } = useContext(AuthContext);
  const { setMedia } = useContext(MovieContext);
  const { setAlert } = useContext(AlertContext);

  const handleAddMedia = (typeFor) => {
    if (!isAuthentucated) return;
    setMedia({ media, media_id: media.id }, typeFor);
    if (typeFor === 'ratings') {
      setAlert(`${media.name || media.title} rated`, 'success');
    } else {
      setAlert(`${media.name || media.title} add to ${typeFor}`, 'success');
    }
  };

  return (
    <Styled className='tag--group'>
      <button className={`tag--btn ${!isAuthentucated && 'disabled'}`}>
        <MdFormatListBulleted className='tag' />
      </button>
      <button
        onClick={() => handleAddMedia('favorites')}
        className={`tag--btn ${!isAuthentucated && 'disabled'}`}
      >
        <IoMdHeart className='tag' />
      </button>
      <button
        onClick={() => handleAddMedia('watchlist')}
        className={`tag--btn ${!isAuthentucated && 'disabled'}`}
      >
        <IoMdBookmark className='tag' />
      </button>
      <button
        onClick={() => handleAddMedia('ratings')}
        className={`tag--btn ${!isAuthentucated && 'disabled'}`}
      >
        <MdStar className='tag' />
      </button>
    </Styled>
  );
};

export default TagGroup;
