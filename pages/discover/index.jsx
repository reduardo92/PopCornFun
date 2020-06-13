import React from 'react';
import movieDB from '../../components/utility/movieDB';
import MediaSection from '../../components/ui/mediaProfile/MediaSection';

const discover = ({ discover }) => {
  return <MediaSection mediaFor={discover} forPage='disc' />;
};

export const getServerSideProps = async ({ query }) => {
  const page = `&page=${query.page ? query.page : 1}`;
  const sort_by = `sort_by=${
    query.sort_by ? query.sort_by : 'popularity.desc'
  }`;
  const year = query.year
    ? `&${
        query.query === 'movie' ? 'primary_release_year' : 'first_air_date_year'
      }=${query.year}`
    : '';
  const genres = query.genres ? `&with_genres=${query.genres}` : '';

  try {
    const discover = await movieDB(
      `discover/${query.query}`,
      `${sort_by}${year}${genres}${page}`
    );
    return {
      props: {
        discover: {
          typeFor: query.query,
          title: query.query,
          ...discover,
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default discover;
