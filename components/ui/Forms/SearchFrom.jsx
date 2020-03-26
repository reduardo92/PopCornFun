import { useContext, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import MovieContext from '../../context/MovieContext';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import { MdPerson, MdLocalMovies, MdTv } from 'react-icons/md';
import { CLEAR_SEARCH_DATA } from '../../context/types';
import Link from 'next/link';

const Styled = styled.div`
  background-color: var(--white-clr);
  padding: 0;

  .form {
    max-width: 920px;
    margin: 0 auto;
    padding: 0 1em;
    position: relative;

    &:hover svg {
      color: var(--primary-clr);
    }
  }

  .form-group {
    display: flex;
    margin: 0;
  }
  .form-label {
    margin: 0;
    margin-right: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      color: var(--grey-clr);
    }

    /* &:hover svg {
      color: var(--primary-clr);
    } */
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
  }

  .search--content {
    height: auto;
    overflow-y: auto;
    box-shadow: 0 11px 15px rgba(0, 0, 0, 0.28);

    & > .search--content--item:first-child {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    & > .search--content--item:last-child {
      border-top: none;
    }
  }

  .search--content--item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

  @media screen and (min-width: 1000px) {
    .form {
      padding: 0;
    }
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
      <Form className='form' onSubmit={handleSubmit}>
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
            onClick={() => setIsFocus(true)}
            onBlur={() => setTimeout(() => setIsFocus(false), 300)}
            placeholder='Search for a movie, tv show, person...'
          />
        </Form.Group>
        {(isFocus === true || search !== '') && (
          <span
            onClick={() => {
              setSearch('');
              setIsFocus(false);
            }}
            className='form--clear'
          >
            x
          </span>
        )}
      </Form>
      <div className='search--content'>
        {isFocus &&
          searchData &&
          searchData.map(item => (
            <Link
              key={item.id}
              href={`/${item.media_type}/[id]`}
              as={`/${item.media_type}/${item.id}`}
            >
              <div
                // key={item.id}
                onClick={() => setSearch('')}
                className='search--content--item'
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
              </div>
            </Link>
          ))}
      </div>
    </Styled>
  );
};

export default SearchFrom;
