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
  return (
    <Layout>
      <Styled className='profile' bgImg={tv.backdrop_path}>
        <div className='profile--backdrop' />
        <div className='profile--header'>
          <ProfileHeader data={tv} />
          <TopBilledCast data={tv.credits.cast} />
          <ReviewSection data={tv.reviews.results} movieId={tv.id} />
          <MediaSection
            videos={tv.videos.results}
            posters={tv.images.posters}
            backdrops={tv.images.backdrops}
            typeId={tv.id}
          />
          <RecommenSection data={tv} />
        </div>
        <ProfileStats data={tv} keywords={Object.values(tv.keywords)[0]} />
      </Styled>
    </Layout>
  );
};

TvProfile.getInitialProps = async ctx => {
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
