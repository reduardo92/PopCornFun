import { useContext } from 'react';
import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import { IMG_URL_OR, IMG_URL } from '../../components/context/types';
import CirclePercentage from '../../components/ui/CirclePercentage';
import TagGroup from '../../components/ui/TagGroup';
import Link from 'next/link';
import PlayButton from '../../components/ui/PlayButton';
import TopBilledCast from '../../components/ui/TopBilledCast';
import ReviewSection from '../../components/ui/ReviewSection';
import MediaSection from '../../components/ui/MediaSection';
import MovieContext from '../../components/context/MovieContext';
import Layout from '../../components/layout';

const Styled = styled.section`
  background: var(--bg-gradient);
  margin-top: 110px;

  .profile--backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${({ bgImg }) => `${IMG_URL_OR}${bgImg}`}) no-repeat center;
    background-color: black;
    min-height: 400px;
    background-size: cover;
    background-position: top;
    object-fit: cover;
    position: relative;

    &__img {
      position: absolute;
      bottom: -20vw;
      left: 20px;
      width: 120px;
    }
  }

  .profile--header {
    position: relative;
    padding: 2em 0.5em;
    max-width: 750px;
    margin: 0 auto;
  }

  .profile--header__content {
    display: grid;
    grid-gap: 1.7em;
    grid-auto-columns: auto;

    .rating {
      svg {
        margin-right: calc(3vw + 0.5em);
      }
    }
  }

  .head {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1em;
    padding: 0 1em 0.5em;

    .title {
      align-self: center;
      font-size: calc(0.5em + 3vw);
    }
  }

  /* profile--header__img */
  .profile--header__img {
    width: 120px;
    margin-top: -8em;
    align-self: flex-end;
  }

  .year {
    opacity: 0.6;
    font-weight: 400;
  }

  .rating,
  .meta {
    display: flex;
    align-items: center;
    padding: 0 0.5em;
  }

  .tag--group {
    border-left: 1px solid #7b7b7b;
    padding-left: 1.5em;
  }

  /* /// */
  .meta {
    justify-content: space-between;
    font-size: 0.85rem;

    &--tab {
      border-right: 1px solid #7b7b7b;
      padding-right: 1em;
      text-align: center;
    }
    &--tab:last-child {
      border: none;
    }
  }
  /* /// */

  .crew {
    /* margin: 1em 0; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    font-weight: bold;
  }

  .play--button {
    width: fit-content;
  }

  @media screen and (min-width: 768px) {
    .profile--header {
      max-width: 900px;
      padding: 2em 1em;
    }

    .head .profile--header__img {
      width: 160px;
    }

    .rating {
      grid-column: 1 /2;
    }

    .meta {
      grid-column: 2 /3;
    }

    .head,
    .overview,
    .crew {
      grid-column: 1/ 3;
    }

    .play--button {
      flex-direction: row;
      font-size: 1.1rem;

      &::before {
        width: auto;
        margin: auto;
        transform-origin: left;
      }

      svg {
        font-size: 2rem;
        order: 1;
        margin-left: 5px;
      }

      &:hover svg,
      &:focus svg {
        margin-left: 15px;
        margin-bottom: 0;
        transform: scale(0.98);
      }
    }

    .CircularProgressbar {
      width: 66px;
    }
  }
`;

const credits = arry => {
  const arrData = arry.reduce((acc, obj) => {
    let key = obj.name;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, []);

  const joinData = Object.entries(arrData)
    .map(([key, value]) => {
      let department = value.map(item => item.department);
      let item = arrData[key].map(item => ({ ...item, department }));
      return item;
    })
    .sort((a, b) => b.length - a.length);

  return joinData;
};

const MovieProfile = ({ movie, typeFor }) => {
  const { setData } = useContext(MovieContext);

  return (
    <Layout>
      <Styled className='profile' bgImg={movie.backdrop_path}>
        <div className='profile--backdrop' />
        <div className='profile--header'>
          <div className='profile--header__content'>
            <div className='head'>
              <div className='profile--header__img'>
                <img
                  className='poster'
                  src={`${IMG_URL}${movie.poster_path || movie.profile_path}`}
                  alt={movie.title || movie.name}
                />
              </div>
              <h2 className='title'>
                {movie.title || movie.name}{' '}
                <span className='year'>({movie.release_date.slice(0, 4)})</span>
              </h2>
            </div>
            <div className='rating'>
              <CirclePercentage value={movie.vote_average * 10} />
              <TagGroup />
            </div>
            <div className='meta'>
              <span className='release meta--tab'>2017</span>
              <span className='runtime meta--tab'>1h 02 mins</span>
              <span className='rating meta--tab'>R</span>
              <span className='genre meta--tab'>Action,Drama,Sci-fi</span>
            </div>
            <div className='overview'>
              <h3 className='subTitle'>OVERVIEW</h3>
              <p className='overview--para'>{movie.overview}</p>
            </div>
            <div className='crew'>
              {credits(movie.credits.crew).map(
                (c, i) =>
                  i < 6 && (
                    <div key={c[0].id} className='crew--person'>
                      <Link href='/person/[id]' as={`/person/${c[0].id}`}>
                        {c[0].name}
                      </Link>
                      <small className='d-block mt-1'>
                        {c[0].department.join(', ')}
                      </small>
                    </div>
                  )
              )}
            </div>
            <PlayButton onclick={() => setData(movie.videos.results[1].key)} />
          </div>
        </div>
        <TopBilledCast data={movie.credits.cast} />
        <ReviewSection data={movie.reviews.results} movieId={movie.id} />
        <MediaSection
          data={movie}
          videos={movie.videos.results}
          posters={movie.images.posters}
          backdrops={movie.images.backdrops}
          typeId={movie.id}
        />
      </Styled>
    </Layout>
  );
};

MovieProfile.getInitialProps = async ctx => {
  console.log(ctx.query, 'ID');
  console.log(ctx);

  //   const url = ctx.asPath.slice(1);
  try {
    const movie = await movieDB(
      `movie/${ctx.query.id || '454626'}`,
      'append_to_response=account_states,external_ids,keywords,release_dates,videos,recommendations,reviews,credits,images&include_image_language=en,null'
    );
    return {
      movie
    };
  } catch (error) {
    console.log(error);
  }
};

export default MovieProfile;
