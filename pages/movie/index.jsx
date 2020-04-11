import React from 'react';
import movieDB from '../../components/utility/movieDB';
import MediaSection from '../../components/ui/mediaProfile/MediaSection';

const movie = ({ movies }) => <MediaSection mediaFor={movies} />;

movie.getInitialProps = async ({ query }) => {
  const queryLeng = Object.keys(query).length;
  try {
    const movies = await movieDB(
      `movie/${queryLeng === 0 ? 'popular' : query.query}`,
      `page=${query.page ? query.page : 1}`
    );
    return {
      movies: {
        typeFor: 'movie',
        title: queryLeng === 0 ? 'popular' : query.query.split('_').join(' '),
        ...movies,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default movie;
