import MovieProvider from '../components/context/MovieProvider';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavCustom from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>PopCorn Fun</title>
      <link
        href='https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
        crossOrigin='anonymous'
      />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
        key='viewport'
      />
    </Head>
    <MovieProvider>
      <NavCustom />
      <Component {...pageProps} />
      <Footer />
    </MovieProvider>
  </>
);

export default MyApp;
