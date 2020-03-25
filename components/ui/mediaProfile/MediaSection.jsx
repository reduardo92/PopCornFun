import React, { useContext, useEffect } from 'react';
import MovieContext from '../../context/MovieContext';
import styled from 'styled-components';
import Layout from '../../layout';
import Pagination from '../Pagination/Pagination';
import CardTwo from '../Cards/CardTwo';
import PersonCard from '../Cards/PersonCard';

const Styled = styled.section`
  background: var(--bg-dark-gradient);
  padding: 150px 1em 5em 1em;

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
    margin: 3em 0;
    justify-items: center;
  }

  .person--grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 1em;
    grid-row-gap: 2em;
    margin: 3em 0;
  }

  @media screen and (min-width: 768px) {
    .content--container {
      grid-row-gap: 3.5em;
      grid-template-columns: repeat(2, 1fr);
    }

    .person--grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1000px) {
    .person--grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const MediaSection = ({ mediaFor }) => {
  const { paginate } = useContext(MovieContext);

  useEffect(() => {
    paginate(mediaFor.page);
  }, [mediaFor.page]);

  return (
    <Layout>
      <Styled className='MediaSection'>
        <div className='wrapper'>
          <h2 className='title'>
            {mediaFor.title}{' '}
            {mediaFor.typeFor === 'tv' ? 'TV' : mediaFor.typeFor}
          </h2>
          <Pagination
            numberOfArticles={mediaFor.total_pages}
            typeFor={`/${mediaFor.typeFor}?query=${mediaFor.title
              .split(' ')
              .join('_')}&page=`}
          />
          <div
            className={
              mediaFor.typeFor === 'person'
                ? 'person--grid'
                : 'content--container'
            }
          >
            {mediaFor.results.map(item =>
              mediaFor.typeFor === 'person' ? (
                <PersonCard key={item.id} data={item} />
              ) : (
                <CardTwo key={item.id} data={item} typeFor={mediaFor.typeFor} />
              )
            )}
          </div>
          <Pagination
            numberOfArticles={mediaFor.total_pages}
            typeFor={`/${mediaFor.typeFor}?query=${mediaFor.title
              .split(' ')
              .join('_')}&page=`}
          />
        </div>
      </Styled>
    </Layout>
  );
};

export default MediaSection;
