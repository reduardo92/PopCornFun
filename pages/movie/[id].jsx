import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import { IMG_URL_OR } from '../../components/context/types';
import CirclePercentage from '../../components/ui/CirclePercentage';
import TagGroup from '../../components/ui/TagGroup';
import Link from 'next/link';

const Styled = styled.section`
  background-color: red;
  margin-top: 123px;
  .profile--backdrop {
    background-image: url(${({ bgImg }) => `${IMG_URL_OR}${bgImg}`});
    min-height: 400px;
    background-size: cover;
    background-position: top;
    object-fit: cover;
  }

  .profile--header {
    padding: 2em 0.5em;
  }

  .crew {
    margin: 1em 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  }
`;

const MovieProfile = ({ movie, typeFor }) => {
  console.log('profile', movie);

  let countedNames = movie.credits.crew.reduce((acc, obj) => {
    let key = obj.name;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, []);

  const crew = Object.entries(countedNames)
    .map(([key, value]) => {
      let department = value.map(item => item.department);
      let item = countedNames[key].map(item => ({ ...item, department }));
      return item;
    })
    .sort((a, b) => b.length - a.length);

  return (
    <Styled className='profile' bgImg={movie.backdrop_path}>
      <div className='profile--backdrop' />
      <div className='profile--header'>
        <div className='profile--header__img'>
          <img src='' alt='' className='poster' />
        </div>
        <div className='profile--header__content'>
          <h2 className='title'>{movie.title || movie.name}</h2>
          <div className='rating'>
            <CirclePercentage value={movie.vote_average * 10} />
            <TagGroup />
          </div>
          <div className='meta'>
            <span className='release meta--tab'>2017</span>
            <span className='runtime meta--tab'>1h 02 mins</span>
            <span className='rating meta--tab'>R</span>
            <span className='genre meta--tab'>Action,Drama,Sci-fi</span>
          </div>
          <div className='overview'>{movie.overview}</div>
          <div className='crew'>
            {crew.map(
              (c, i) =>
                i < 6 && (
                  <div key={c[0].id} className='crew--person'>
                    <Link href='/person/[id]' as={`/person/${c[0].id}`}>
                      {c[0].name}
                    </Link>
                    <small className='d-block mt-1'>
                      {c[0].department.join(', ')}
                    </small>
                  </div>
                )
            )}
          </div>
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
