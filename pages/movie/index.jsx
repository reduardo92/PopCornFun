import React from 'react';
import Layout from '../../components/layout';
import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import CardTwo from '../../components/ui/Cards/CardTwo';

const Styled = styled.section`
  background: var(--bg-dark-gradient);
  padding: 150px 1em 0 1em;

  .wrapper {
    max-width: 1500px;
    margin: 0 auto;

    .title {
      font-size: 1.5rem;
      margin-bottom: 1em;
    }
  }

  .content--container {
    display: grid;
    grid-gap: 2em;
  }

  @media screen and (min-width: 768px) {
    .content--container {
      grid-row-gap: 3.5em;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const movie = ({ movies }) => {
  console.log(movies);
  return (
    <Layout>
      <Styled className='movie--section'>
        <div className='wrapper'>
          <h2 className='title'>{movies.title} Movies</h2>
          <div className='content--container'>
            {movies.results.map(item => (
              <CardTwo key={item.id} data={item} typeFor={movies.typeFor} />
            ))}
          </div>
        </div>
      </Styled>
    </Layout>
  );
};

movie.getInitialProps = async ({ query }) => {
  const queryLeng = Object.keys(query).length;
  try {
    const movies = await movieDB(
      `movie/${queryLeng === 0 ? 'popular' : query.query}`
    );
    return {
      movies: {
        typeFor: 'movie',
        title: queryLeng === 0 ? 'popular' : query.query.split('_').join(' '),
        ...movies
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default movie;
