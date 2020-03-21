import { useContext, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import MovieContext from '../context/MovieContext';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import { MdPerson, MdLocalMovies, MdTv } from 'react-icons/md';
import { CLEAR_SEARCH_DATA } from '../context/types';
import Link from 'next/link';

const Styled = styled.div`
  background-color: var(--white-clr);
  padding: 0;

  .form {
    max-width: 920px;
    margin: 0 auto;
    padding: 0 1em;
    position: relative;
  }

  .form-group {
    display: flex;
    margin: 0;
  }
  .form-label {
    margin-right: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: var(--grey-clr);
    }
  }

  .form--clear {
    position: absolute;
    /* display: none; */
    top: 50%;
    right: 2%;
    transform: translate(-2%, -50%);
    color: var(--primary-clr);
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--ease--in--out--02s);

    &:hover {
      opacity: 0.7;
    }
  }

  .form-control {
    border: 0;
    color: var(--grey-clr);

    &::placeholder {
      font-size: 0.9rem;
    }

    /* &:not( {
      background-color: red;
    } */
  }

  .search--content {
    height: auto;
    display: block;
  }

  .search--content--item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.1em 1em;
    transition: var(--ease--in--out--02s);
    cursor: pointer;
    &:hover {
      background-color: rgba(196, 196, 196, 0.4);
    }

    &__name {
      color: var(--second-clr);
      margin-bottom: 0;
      margin-left: 1em;

      .media--in {
        color: rgb(151, 151, 151);
        margin-left: 0.3em;
      }
    }

    &:hover .search--content--item__name,
    &:hover .search--content--item__icon {
      color: var(--primary-clr);
    }
  }

  .wrapper {
    margin: 0 auto;
    max-width: 920px;
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: var(--second-clr);
    text-transform: capitalize;
  }

  .closee {
    display: none;
  }
`;

const SearchFrom = () => {
  const { getSearchData, clearData, searchData } = useContext(MovieContext);
  const [search, setSearch] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();

  const router = useRouter();

  const handleChange = e => setSearch(e.target.value);

  useEffect(() => {
    if (search === '') {
      console.log('emty', search);
      clearData(CLEAR_SEARCH_DATA);
      return;
    } else {
      getSearchData(search);
      console.log('sea', search);
    }
  }, [search]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (search === '') {
      console.log('enter something');
    } else {
      console.log('loged', search);
      router.push('/search/[query]', `/search/${search}`);
    }
    setSearch('');
  };

  return (
    <Styled classname='search form'>
      <Form
        className='form'
        onClick={() => setIsFocus(true)}
        onBlur={() => setTimeout(() => setIsFocus(false), 100)}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId='search'>
          <Form.Label>
            <FaSearch />
          </Form.Label>
          <Form.Control
            ref={inputRef}
            type='text'
            name='search'
            value={search}
            onChange={handleChange}
            placeholder='Search for a movie, tv show, person...'
          />
          {isFocus && (
            <span onClick={() => setSearch('')} className='form--clear'>
              x
            </span>
          )}
        </Form.Group>
      </Form>
      <div className={`search--content ${isFocus ? 'showw' : 'closee'}`}>
        {searchData &&
          searchData.map(item => (
            <div key={item.id} className='search--content--item'>
              <Link
                href={`/${item.media_type}/[id]`}
                as={`/${item.media_type}/${item.id}`}
              >
                <div className='wrapper'>
                  {item.media_type === 'movie' ? (
                    <MdLocalMovies className='search--content--item__icon' />
                  ) : item.media_type === 'tv' ? (
                    <MdTv className='search--content--item__icon' />
                  ) : (
                    <MdPerson className='search--content--item__icon' />
                  )}
                  <p className='search--content--item__name'>
                    {item.name || item.title}
                    <span className='media--in'>
                      in{' '}
                      {item.media_type === 'person'
                        ? 'People'
                        : item.media_type}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Styled>
  );
};

export default SearchFrom;
