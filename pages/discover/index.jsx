import React from 'react';
import movieDB from '../../components/utility/movieDB';
import MediaSection from '../../components/ui/mediaProfile/MediaSection';

const discover = ({ discover }) => {
  console.log(discover);

  return <MediaSection mediaFor={discover} forPage='disc' />;
};

discover.getInitialProps = async ({ query }) => {
  const page = `&page=${query.page ? query.page : 1}`;
  const sort_by = `sort_by=${
    query.sort_by ? query.sort_by : 'popularity.desc'
  }`;
  const year = `&year=${query.year ? query.year : ''}`;
  const genres = `&with_genres=${query.genres ? query.genres : ''}`;
  const keywords = `&with_keywords=${query.keywords ? query.keywords : ''}`;
  try {
    const discover = await movieDB(
      `discover/${query.query}`,
      `${sort_by}${year}${genres}${keywords}${page}`
    );
    return {
      discover: {
        typeFor: query.query,
        title: query.query,
        ...discover
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default discover;
