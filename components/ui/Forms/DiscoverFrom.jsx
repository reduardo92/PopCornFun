import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import MovieContext from '../../context/MovieContext';
import Form from 'react-bootstrap/Form';
import getYears from '../../utility/getYears';
import uuid from 'uuid';

const Styled = styled.div`
  .discover--from {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
  }

  .clear--fields {
    background: var(--bg-gradient);
    font-size: 1.3rem;
    padding: 0em 0.5em;
    align-self: center;
    text-align: center;
    margin-bottom: 1.1em;
    border-radius: 3px;
    transition: var(--ease-12s);
    cursor: pointer;

    &:hover,
    &:focus {
      transform: scale(0.9);
      opacity: 0.8;
    }
  }

  @media screen and (min-width: 768px) {
    flex: 100%;
    margin-bottom: 1em;

    .discover--from {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > div {
        flex: 1;
        margin-right: 1em;
      }

      & > :last-child {
        margin-right: 0;
      }

      .clear--fields {
        flex: 0 0 30px;
        align-self: center;
        margin: 0;
        margin-top: 0.85em;
      }
    }
  }

  .genre--control .tv {
    display: ${({ genre }) => genre && 'none'};
  }
  @media screen and (min-width: 1000px) {
    flex: 1;
    margin-left: 2em;

    .discover--from {
      display: flex;
      justify-content: space-between;

      & > div {
        flex: 1;
        margin-right: 1em;
      }

      & > :last-child {
        margin-right: 0;
      }
    }
  }
`;

const DiscoverForm = ({ typeFor }) => {
  const {
    discoverForm: { handleChange, handleSubmit, form, setForm }
  } = useContext(MovieContext);

  const { query, push } = useRouter();

  const { year, sort_by, genre } = form;

  const sortBy = [
    { id: uuid.v4(), value: 'popularity.desc', name: 'popularity descending' },
    { id: uuid.v4(), value: 'popularity.asc', name: 'popularity ascending' },
    { id: uuid.v4(), value: 'vote_average.desc', name: 'rating descending' },
    { id: uuid.v4(), value: 'vote_average.asc', name: 'rating ascending' },
    {
      id: uuid.v4(),
      value: 'primary_release_date.desc',
      name: 'release date descending'
    },
    {
      id: uuid.v4(),
      value: '"primary_release_date.asc',
      name: 'release date ascending'
    },
    { id: uuid.v4(), value: 'title.asc', name: 'title (A-Z)' },
    { id: uuid.v4(), value: 'title.desc', name: 'title (Z-A)' }
  ];

  const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 10759, name: 'Action & Adventure', for: 'tv' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10762, name: 'Kids', for: 'tv' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 10763, name: 'News', for: 'tv' },
    { id: 10764, name: 'Reality', for: 'tv' },
    { id: 10770, name: 'Tv Movie' },
    { id: 53, name: 'Thriller' },
    { id: 878, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap', for: 'tv' },
    { id: 10767, name: 'Talk', for: 'tv' },
    { id: 10768, name: 'War & Politics', for: 'tv' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
  ];

  const handleReset = () => {
    setForm({
      year: '',
      sort_by: 'popularity.desc',
      genre: ''
    });
    push(
      `/discover?query=${query.query}${sortQuery}${yearQuery}${genreQuery}&page=1`
    );
  };

  const sortQuery = sort_by === 'popularity.desc' ? '' : `&sort_by=${sort_by}`;
  const yearQuery = year === '' ? '' : `&year=${year}`;
  const genreQuery = genre === '' ? '' : `&genres=${genre}`;

  useEffect(() => {
    if (genre === '') {
      push(
        `/discover?query=${query.query}${sortQuery}${yearQuery}&page=${query.page}`
      );
    }
    if (year === '') {
      push(
        `/discover?query=${query.query}${sortQuery}${genreQuery}&page=${query.page}`
      );
    }
    push(
      `/discover?query=${query.query}${sortQuery}${yearQuery}${genreQuery}&page=${query.page}`
    );
  }, [year, sort_by, genre]);

  return (
    <Styled
      className='discover--form--section'
      genre={query.query === 'movie' && true}
    >
      <Form className='discover--from' onSubmit={handleSubmit}>
        <Form.Group controlId='year'>
          <Form.Label>Year</Form.Label>
          <Form.Control
            as='select'
            name='year'
            value={year}
            onChange={handleChange}
          >
            <option></option>
            {getYears()
              .reverse()
              .map(year => (
                <option key={year}>{year}</option>
              ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='sort_by'>
          <Form.Label>Sort By</Form.Label>
          <Form.Control
            as='select'
            name='sort_by'
            value={sort_by}
            onChange={handleChange}
          >
            {sortBy.map(({ id, value, name }) => (
              <option key={id} value={value}>
                {name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='genres'>
          <Form.Label>Genres</Form.Label>
          <Form.Control
            className='genre--control'
            as='select'
            name='genre'
            value={genre}
            onChange={handleChange}
          >
            <option></option>
            {genres.map(genre => (
              <option
                key={genre.id}
                value={genre.id}
                className={!genre.for ? 'both' : 'tv'}
              >
                {genre.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {(year != '' || genre != '' || sort_by != 'popularity.desc') && (
          <div className='clear--fields' onClick={handleReset}>
            x
          </div>
        )}
      </Form>
    </Styled>
  );
};

export default DiscoverForm;
