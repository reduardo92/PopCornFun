import { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Styled = styled.div`
  margin: 2em 0;
  display: grid;
  max-width: 1020px;

  .profile--biography__name {
    font-weight: bold;
    margin-bottom: 1em;
    text-align: center;
  }

  .subTitle {
    margin-bottom: 1em;
  }

  .read--more {
    display: flex;
    align-items: center;
    margin: 0 auto;
    background-color: var(--primary-clr);
    border-radius: 50%;
    padding: 0.25em;
    font-size: 1.7rem;
    transition: var(--ease--in--out--02s);
    color: var(--white-clr);

    &:hover {
      opacity: 0.8;
      transform: scale(0.9);
    }
  }

  @media screen and (min-width: 1000px) {
    justify-self: start;
    align-self: center;
    margin-left: 2em;

    .profile--biography__name {
      text-align: left;
    }
  }
`;

const Biography = ({ name, bio }) => {
  const [bioActive, setBioActive] = useState(false);

  const bioCondetion =
    bio.length === 0
      ? 'Sorry Nothing Available'
      : bio.length <= 600
      ? bio
      : `${bio.slice(0, 600)}...`;

  return (
    <Styled className='profile--biography px-2'>
      <h2 className='profile--biography__name'>{name}</h2>
      <h3 className='subTitle'>Biography</h3>
      <p className='profile--biography__bio'>
        {bioActive ? bio : bioCondetion}
      </p>
      {bio.length >= 600 && (
        <a
          href='#'
          // onClick={() => setModal(person.biography, 'person')}
          onClick={() => setBioActive(!bioActive)}
          className='read--more'
        >
          {bioActive ? (
            <IoIosArrowUp className='read--more__arrow' />
          ) : (
            <IoIosArrowDown className='read--more__arrow' />
          )}
        </a>
      )}
    </Styled>
  );
};

export default Biography;
