import { useContext, useEffect } from 'react';
import MovieContext from '../../components/context/MovieContext';
import {
  IMG_URL_OR,
  SET_MEDIADATA,
  CLEAR_MEDIADATA
} from '../../components/context/types';
import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import TopBilledCast from '../../components/ui/TopBilledCast';
import ReviewSection from '../../components/ui/ReviewSection';
import MediaSection from '../../components/ui/MediaSection';
import Layout from '../../components/layout';
import ProfileHeader from '../../components/ui/mediaProfile/ProfileHeader';
import RecommenSection from '../../components/ui/RecommenSection';
import ProfileStats from '../../components/ui/mediaProfile/ProfileStats/ProfileStats';

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

  @media screen and (min-width: 768px) {
    .profile--header {
      max-width: 1100px;
      padding: 2em 1em;
    }
  }
`;

const TvProfile = ({ tv }) => {
  const { setData, clearData, mediaProfile } = useContext(MovieContext);

  useEffect(() => {
    setData(SET_MEDIADATA, tv);
    return () => {
      clearData(CLEAR_MEDIADATA);
    };
  }, [tv]);

  console.log('from mediaProfile', mediaProfile);
  return (
    mediaProfile && (
      <Layout>
        <Styled className='profile' bgImg={mediaProfile.backdrop_path}>
          <div className='profile--backdrop' />
          <div className='profile--header'>
            <ProfileHeader data={mediaProfile} />
            <TopBilledCast data={mediaProfile.credits.cast} />
            <ReviewSection
              data={mediaProfile.reviews.results}
              movieId={mediaProfile.id}
            />
            <MediaSection
              videos={mediaProfile.videos.results}
              posters={mediaProfile.images.posters}
              backdrops={mediaProfile.images.backdrops}
              typeId={mediaProfile.id}
            />
            <RecommenSection data={mediaProfile} />
          </div>
          <ProfileStats
            data={mediaProfile}
            keywords={Object.values(mediaProfile.keywords)[0]}
          />
        </Styled>
      </Layout>
    )
  );
};

TvProfile.getInitialProps = async ctx => {
  console.log(ctx.query, 'ID');
  console.log(ctx);

  try {
    const tv = await movieDB(
      `tv/${ctx.query.id || '62688'}`,
      'append_to_response=account_states,external_ids,keywords,content_ratings,videos,recommendations,reviews,credits,images&include_image_language=en,null'
    );
    return {
      tv: { typeFor: 'tv', ...tv }
    };
  } catch (error) {
    console.log(error);
  }
};

export default TvProfile;
