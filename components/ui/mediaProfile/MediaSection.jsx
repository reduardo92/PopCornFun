import React, { useContext, useEffect } from 'react';
import MovieContext from '../../context/MovieContext';
import styled from 'styled-components';
import Layout from '../../layout';
import Pagination from '../Pagination/Pagination';
import CardTwo from '../Cards/CardTwo';
import PersonCard from '../Cards/PersonCard';
import Link from 'next/link';
import DiscoverForm from '../Forms/DiscoverFrom';
import { useRouter } from 'next/router';

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

  /* Set Styles for When Discover Page is Active */
  .head--tabs {
    display: flex;
    max-width: 240px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 1.2em;

    &__tab {
      font-size: 1.25rem;
      font-weight: bold;
      border-bottom: 2px solid transparent;
      transition: var(--ease-12s);
      color: var(--white-clr);

      &:hover {
        opacity: 0.5;
        border-bottom-color: var(--primary-clr);
      }

      &:first-child {
        /* margin-right: 1em; */
      }
    }
    .disabled {
      border-bottom-color: var(--primary-clr);
      pointer-events: none;
    }
  }

  @media screen and (min-width: 768px) {
    /* Set Styles for When Discover Page is Active */
    .head {
      display: flex;
      flex-wrap: wrap;

      .title {
        flex: 100%;
      }

      .head--tabs {
        margin: 0;
        margin-bottom: 1em;
        flex: 1;

        &__tab {
          margin-right: 1em;
        }
      }
    }

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

    /* Set Styles for When Discover Page is Active */
    .head {
      .head--tabs {
        margin: 0;
        flex: 1;

        &__tab {
          margin-right: 1em;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .head {
      padding: 0 2.2em 0 2em;
    }
  }
`;

const MediaSection = ({ mediaFor, forPage }) => {
  const {
    paginate,
    discoverForm: { setForm }
  } = useContext(MovieContext);

  useEffect(() => {
    paginate(mediaFor.page);
  }, [mediaFor.page]);

  const { asPath } = useRouter();

  const setLink = () => {
    const mediaLink = `/${mediaFor.typeFor}?query=${mediaFor.title
      .split(' ')
      .join('_')}&page=`;

    const discLink = forPage && asPath.slice(0, -1);

    return forPage ? discLink : mediaLink;
  };

  return (
    <Layout>
      <Styled className='MediaSection'>
        <div className='wrapper'>
          <div className={`head`}>
            <h2 className='title'>
              {forPage ? (
                'Discover New Movies & TV Shows'
              ) : (
                <>
                  {mediaFor.title}
                  {'  '}
                  {mediaFor.typeFor === 'tv' ? 'TV' : mediaFor.typeFor}
                </>
              )}
            </h2>
            {forPage && (
              <>
                <div className='head--tabs'>
                  <Link href='/discover?query=movie&page=1'>
                    <a
                      onClick={() =>
                        setForm({
                          year: '',
                          sort_by: 'popularity.desc',
                          genre: ''
                        })
                      }
                      className={`head--tabs__tab ${mediaFor.title ===
                        'movie' && 'disabled'}`}
                    >
                      {' '}
                      Movies
                    </a>
                  </Link>
                  <Link href='/discover?query=tv&page=1'>
                    <a
                      onClick={() =>
                        setForm({
                          year: '',
                          sort_by: 'popularity.desc',
                          genre: ''
                        })
                      }
                      className={`head--tabs__tab ${mediaFor.title === 'tv' &&
                        'disabled'}`}
                    >
                      Tv Shows
                    </a>
                  </Link>
                </div>
                <DiscoverForm
                  typeFor={mediaFor.title === 'movie' ? 'tv' : 'movie'}
                />
              </>
            )}
          </div>
          <div className='main--content'>
            <Pagination
              numberOfArticles={mediaFor.total_pages}
              typeFor={setLink()}
            />
            <div
              className={
                mediaFor.typeFor === 'person'
                  ? 'person--grid'
                  : 'content--container'
              }
            >
              {mediaFor.results.length === 0 ? (
                <h3 className='text-dark vh-100'>Sorry Nothing Found</h3>
              ) : (
                mediaFor.results.map(item =>
                  mediaFor.typeFor === 'person' ? (
                    <PersonCard key={item.id} data={item} />
                  ) : (
                    <CardTwo
                      key={item.id}
                      data={item}
                      typeFor={mediaFor.typeFor}
                    />
                  )
                )
              )}
            </div>
            <Pagination
              numberOfArticles={mediaFor.total_pages}
              typeFor={setLink()}
            />
          </div>
        </div>
      </Styled>
    </Layout>
  );
};

export default MediaSection;
