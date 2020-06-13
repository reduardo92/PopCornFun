import movieDB from '../../components/utility/movieDB';
import MediaMainStyle from '../../components/ui/mediaProfile/mediaMainStyle';
import TopBilledCast from '../../components/ui/TopBilledCast';
import ReviewSection from '../../components/ui/ReviewSection';
import MediaSection from '../../components/ui/MediaSection';
import Layout from '../../components/layout';
import ProfileHeader from '../../components/ui/mediaProfile/ProfileHeader';
import RecommenSection from '../../components/ui/RecommenSection';
import ProfileStats from '../../components/ui/mediaProfile/ProfileStats/ProfileStats';

const MovieProfile = ({ movie }) => (
  <Layout>
    <MediaMainStyle className='profile' bgImg={movie.backdrop_path}>
      <div className='profile--backdrop' />
      <div className='profile--main'>
        <ProfileHeader data={movie} bgImg={movie.backdrop_path} />
        <div className='main-con px-2'>
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
    </MediaMainStyle>
  </Layout>
);

export const getServerSideProps = async ({ query }) => {
  try {
    const movie = await movieDB(
      `movie/${query.id || '454626'}`,
      'append_to_response=account_states,external_ids,keywords,release_dates,videos,recommendations,reviews,credits,images&include_image_language=en,null'
    );
    return {
      props: {
        movie: { typeFor: 'movie', ...movie },
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default MovieProfile;
