import movieDB from '../../components/utility/movieDB';
import TopBilledCast from '../../components/ui/TopBilledCast';
import ReviewSection from '../../components/ui/ReviewSection';
import MediaSection from '../../components/ui/MediaSection';
import Layout from '../../components/layout';
import ProfileHeader from '../../components/ui/mediaProfile/ProfileHeader';
import RecommenSection from '../../components/ui/RecommenSection';
import ProfileStats from '../../components/ui/mediaProfile/ProfileStats/ProfileStats';
import MediaMainStyle from '../../components/ui/mediaProfile/mediaMainStyle';

const TvProfile = ({ tv }) => (
  <Layout>
    <MediaMainStyle className='profile' bgImg={tv.backdrop_path}>
      <div className='profile--backdrop' />
      <div className='profile--main'>
        <ProfileHeader data={tv} bgImg={tv.backdrop_path} />
        <div className='main-con'>
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
      </div>
    </MediaMainStyle>
  </Layout>
);

export const getServerSideProps = async ({ query }) => {
  try {
    const tv = await movieDB(
      `tv/${query.id || '62688'}`,
      'append_to_response=account_states,external_ids,keywords,content_ratings,videos,recommendations,reviews,credits,images&include_image_language=en,null'
    );
    return {
      props: {
        tv: { typeFor: 'tv', ...tv },
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default TvProfile;
