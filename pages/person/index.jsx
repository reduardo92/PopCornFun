import React from 'react';
import movieDB from '../../components/utility/movieDB';
import MediaSection from '../../components/ui/mediaProfile/MediaSection';

const person = ({ person }) => <MediaSection mediaFor={person} />;

export const getServerSideProps = async ({ query }) => {
  try {
    const person = await movieDB(
      `person/popular`,
      `page=${query.page ? query.page : 1}`
    );
    return {
      props: {
        person: {
          typeFor: 'person',
          title: 'popular',
          ...person,
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default person;
