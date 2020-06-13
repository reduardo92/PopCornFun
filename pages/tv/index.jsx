import React from 'react';
import movieDB from '../../components/utility/movieDB';
import MediaSection from '../../components/ui/mediaProfile/MediaSection';

const tv = ({ tv }) => <MediaSection mediaFor={tv} />;

export const getServerSideProps = async ({ query }) => {
  const queryLeng = Object.keys(query).length;
  try {
    const tv = await movieDB(
      `tv/${queryLeng === 0 ? 'popular' : query.query}`,
      `page=${query.page ? query.page : 1}`
    );
    return {
      props: {
        tv: {
          typeFor: 'tv',
          title: queryLeng === 0 ? 'popular' : query.query.split('_').join(' '),
          ...tv,
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default tv;
