import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import { IMG_URL_OR } from '../../components/context/types';

const Styled = styled.section`
  .profile--backdrop {
    background-image: url(${({ bgImg }) => `${IMG_URL_OR}${bgImg}`});
    min-height: 400px;
    background: #1c212e;
    background-size: cover;
    background-position: center;
  }
`;

const MovieProfile = ({ movie, typeFor }) => {
  console.log('profile', movie);
  return (
    <Styled className='profile' bgImg={movie.backdrop_path}>
      <div className='profile--backdrop' />
      <div className='profile--header'>
        <div className='profile--header__img'>
          <img src='' alt='' className='poster' />
        </div>
      </div>
    </Styled>
  );
};

MovieProfile.getInitialProps = async ({ asPath }) => {
  try {
    const movie = await movieDB(
      asPath.slice(1),
      'append_to_response=account_states,external_ids,images,keywords,release_dates,videos,recommendations,reviews,credits'
    );
    return {
      movie
    };
  } catch (error) {
    console.log(error);
  }
};

export default MovieProfile;
