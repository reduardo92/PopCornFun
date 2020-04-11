import Layout from '../components/layout';
import VideoHero from '../components/ui/VideoHero';
import PopularSection from '../components/ui/PopularSection';
import movieDB from '../components/utility/movieDB';
import SectionCarousel from '../components/ui/sectionCarousel/SectionCarousel';
import FeturedSection from '../components/ui/FeturedSection/FeturedSection';
import getFeturedMedia from '../components/utility/getFeturedMedia';

const IndexPage = ({
  movieNowPlay,
  tvOnAir,
  movieAction,
  tvAnima,
  feturedMovie,
  feturedTv,
  people,
}) => {
  return (
    <Layout>
      <VideoHero />
      <PopularSection
        data={movieNowPlay}
        typeFor='movie'
        title={
          <>
            in theaters <br /> now to enjoy
          </>
        }
        subtitle='Most watched movies'
        toLink='/movie'
      />
      <SectionCarousel
        data={people}
        typeFor='person'
        title='Popular persons in film'
        toLink='/person'
        order='true'
      />
      <FeturedSection data={feturedMovie} typeFor='movie' />
      <PopularSection
        data={tvOnAir}
        typeFor='tv'
        title={
          <>
            Popular TV <br />
            Series Right Now
          </>
        }
        subtitle='Most watched tv'
        toLink='/tv'
      />
      <SectionCarousel
        data={movieAction}
        typeFor='movie'
        title='popular action movies'
        toLink='/movie'
        order={'true'}
      />
      <FeturedSection data={feturedTv} typeFor='tv' />
      <SectionCarousel
        data={tvAnima}
        typeFor='tv'
        title='animation to Enjoy'
        toLink='/tv'
      />
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  try {
    const tv = await movieDB('tv/on_the_air');
    const movie = await movieDB('movie/now_playing');
    const movieAction = await movieDB(
      'discover/movie',
      'with_genres=28&sort_by=vote_count.desc'
    );
    const tvAnima = await movieDB('discover/tv', 'with_genres=16');
    const feturedMovie = await getFeturedMedia('movie');
    const feturedTv = await getFeturedMedia('tv');
    const people = await movieDB('person/popular');

    return {
      movieNowPlay: movie.results.slice(0, 12),
      tvOnAir: tv.results.slice(0, 12),
      movieAction: movieAction.results.slice(0, 10),
      tvAnima: tvAnima.results.slice(0, 10),
      feturedMovie,
      feturedTv,
      people: people.results.slice(0, 12),
    };
  } catch (error) {
    console.log(error);
    return {
      movieNowPlay: null,
      tvOnAir: null,
    };
  }
};

export default IndexPage;
