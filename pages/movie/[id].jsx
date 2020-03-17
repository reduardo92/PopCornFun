import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import { IMG_URL_OR } from '../../components/context/types';
import TopBilledCast from '../../components/ui/TopBilledCast';
import ReviewSection from '../../components/ui/ReviewSection';
import MediaSection from '../../components/ui/MediaSection';
import Layout from '../../components/layout';
import ProfileHeader from '../../components/ui/mediaProfile/ProfileHeader';
import RecommenSection from '../../components/ui/RecommenSection';
import ProfileStats from '../../components/ui/mediaProfile/ProfileStats/ProfileStats';

const Styled = styled.section`
  background: var(--bg-gradient);
  /* background: var(--white-clr); */
  margin-top: 90px;

  .profile--backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${({ bgImg }) => `${IMG_URL_OR}${bgImg}`}) no-repeat center;
    background-color: black;
    min-height: 400px;
    background-size: cover;
    background-position: top;
    object-fit: cover;
    position: relative;

    /* &__img {
      position: absolute;
      bottom: -20vw;
      left: 20px;
      width: 120px;
    } */
  }

  .profile--main {
    position: relative;
    padding: 2em 0.5em;
    max-width: 750px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .profile--main {
      max-width: 1100px;
      padding: 2em 1em;
    }
  }

  @media screen and (min-width: 1000px) {
    margin-top: 60px;

    .profile--backdrop {
      display: none;
    }

    .profile--main {
      padding: 2em 0 0;
      max-width: 100%;
      width: 100%;
      display: flex;
      /* align-content: flex-start; */
      flex-wrap: wrap;

      .profile--content {
        flex: 100%;
        width: 100%;
      }

      .main-con {
        max-width: 60%;
        margin-left: auto;
        margin-right: 5%;
        padding: 3em 0;
      }

      .profile--stats {
        flex: 0 1 30%;
      }
    }
  }
`;

const MovieProfile = ({ movie }) => {
  return (
    <Layout>
      <Styled className='profile' bgImg={movie.backdrop_path}>
        <div className='profile--backdrop' />
        <div className='profile--main'>
          <ProfileHeader data={movie} bgImg={movie.backdrop_path} />
          <div className='main-con'>
            <TopBilledCast data={movie.credits.cast} />
            <ReviewSection data={movie.reviews.results} movieId={movie.id} />
            <MediaSection
              videos={movie.videos.results}
              posters={movie.images.posters}
              backdrops={movie.images.backdrops}
              typeId={movie.id}
            />
            <RecommenSection data={movie} />
          </div>
          <ProfileStats
            data={movie}
            keywords={Object.values(movie.keywords)[0]}
          />
        </div>
      </Styled>
    </Layout>
  );
};

MovieProfile.getInitialProps = async ctx => {
  try {
    const movie = await movieDB(
      `movie/${ctx.query.id || '454626'}`,
      'append_to_response=account_states,external_ids,keywords,release_dates,videos,recommendations,reviews,credits,images&include_image_language=en,null'
    );
    return {
      movie: { typeFor: 'movie', ...movie }
    };
  } catch (error) {
    console.log(error);
  }
};

export default MovieProfile;
