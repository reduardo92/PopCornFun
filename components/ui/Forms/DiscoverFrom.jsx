import React from 'react';
import styled from 'styled-components';
import useForm from '../../Hooks/useForm';
import Form from 'react-bootstrap/Form';
import getYears from '../../utility/getYears';

const Styled = styled.div`
  @media screen and (min-width: 768px) {
    flex: 100%;
    margin-bottom: 1em;

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

const DiscoverForm = props => {
  const { handleChange, handleSubmit, form } = useForm({
    year: 'none',
    sort_by: 'popularity descending',
    genre: '',
    keywords: ''
  });

  const { year, sort_by, genre } = form;

  const sortBy = [
    'popularity descending',
    'popularity ascending',
    'rating descending',
    'rating ascending',
    'release date descending',
    'release date ascending',
    'title (A-Z)',
    'title (Z-A)'
  ];

  const genres = [
    'Action & Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Kids',
    'Mystery',
    'News',
    'Reality',
    'Sci-Fi & Fantasy',
    'Soap',
    'Talk',
    'War & Politics',
    'Western'
  ];

  return (
    <Styled className='discover--form--section'>
      <Form className='discover--from' onSubmit={handleSubmit}>
        <Form.Group controlId='year'>
          <Form.Label>Year</Form.Label>
          <Form.Control
            as='select'
            name='year'
            value={year}
            onChange={handleChange}
          >
            <option>none</option>
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
            {sortBy.map(sort => (
              <option key={sort}>{sort}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='genres'>
          <Form.Label>Genres</Form.Label>
          <Form.Control
            as='select'
            name='genre'
            value={genre}
            onChange={handleChange}
          >
            <option disabled></option>
            {genres.map(genre => (
              <option key={genre}>{genre}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </Styled>
  );
};

export default DiscoverForm;

{
  /* <option value='popularity.desc' selected='selected'>
              Popularity Descending
            </option>
            <option value='popularity.asc'>Popularity Ascending</option>
            <option value='vote_average.desc'>Rating Descending</option>
            <option value='vote_average.asc'>Rating Ascending</option>
            <option value='primary_release_date.desc'>
              Release Date Descending
            </option>
            <option value='primary_release_date.asc'>
              Release Date Ascending
            </option>
            <option value='title.asc'>Title (A-Z)</option>
            <option value='title.desc'>Title (Z-A)</option> */
}
