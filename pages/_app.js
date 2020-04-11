import MovieProvider from '../components/context/MovieProvider';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavCustom from '../components/Navbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';
import AlertState from '../components/context/alert/AlertState';
import AuthState from '../components/context/auth/AuthState';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>PopCorn Fun</title>
        <link
          href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap'
          rel='stylesheet'
        ></link>
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
      <AuthState>
        <MovieProvider>
          <AlertState>
            <NavCustom />
            <Component {...pageProps} />
            <Footer />
          </AlertState>
        </MovieProvider>
      </AuthState>
    </>
  );
};

export default MyApp;
