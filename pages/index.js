import Layout from '../components/layout';
import axios from 'axios';
// import { BASE_URL, API_KEY } from '../components/context/types';
import VideoHero from '../components/ui/VideoHero';
import Contact from '../components/contact';
// import PopularSection from '../components/ui/PopularSection';

const IndexPage = () => {
  // console.log(movieNowPlay, tvOnAir);
  return (
    <Layout>
      <VideoHero />
      <Contact />
    </Layout>
  );
};

// IndexPage.getInitialProps = async ctx => {
//   const movie = await axios.get(`${BASE_URL}movie/now_playing?${API_KEY}`);
//   const tv = await axios.get(`${BASE_URL}tv/on_the_air?${API_KEY}`);

//   return {
//     movieNowPlay: movie.data.results,
//     tvOnAir: tv.data.results
//   };
// };

export default IndexPage;

{
  /* <PopularSection
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
      /> */
}
