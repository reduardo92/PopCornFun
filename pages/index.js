import Layout from '../components/layout';
import VideoHero from '../components/ui/VideoHero';
import Contact from '../components/contact';
import PopularSection from '../components/ui/PopularSection';
import movieDB from '../components/utility/movieDB';
import SectionCarousel from '../components/ui/SectionCarousel/SectionCarousel';

const IndexPage = ({ movieNowPlay, tvOnAir, movieAction, tvAnima }) => {
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
        data={movieAction}
        typeFor='movie'
        title='popular action movies'
        toLink='/movie'
      />
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
        data={tvAnima}
        typeFor='tv'
        title='animation to Enjoy'
        toLink='/tv'
      />
      <Contact />
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

    return {
      movieNowPlay: movie.results.slice(0, 12),
      tvOnAir: tv.results.slice(0, 12),
      movieAction: movieAction.results.slice(0, 10),
      tvAnima: tvAnima.results.slice(0, 10)
    };
  } catch (error) {
    console.log(error);
    return {
      movieNowPlay: null,
      tvOnAir: null
    };
  }
};

export default IndexPage;
