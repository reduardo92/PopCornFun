import { useContext, useState, useEffect } from 'react';
import MovieContext from '../../components/context/MovieContext';
import {
  IMG_URL,
  SET_PERSONDATA,
  CLEAR_PERSONDATA
} from '../../components/context/types';
import Layout from '../../components/layout';
import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import KnownFor from '../../components/ui/PersonProfile/KnownFor';
import MediaCredits from '../../components/ui/PersonProfile/MediaCredits';
import { IoIosArrowDown } from 'react-icons/io';
import PersonFacts from '../../components/ui/PersonProfile/PersonFacts';

const Styled = styled.section`
  background: var(--bg-gradient);
  margin-top: 110px;

  .profile--person {
    max-width: 300px;
    margin: 0 auto;
  }

  .profile--biography {
    margin: 2em 0;
    display: grid;
    &__name {
      font-weight: bold;
      margin-bottom: 1em;
      text-align: center;
    }

    .read--more {
      display: flex;
      align-items: center;
      margin: 0 auto;
      background-color: var(--primary-clr);
      border-radius: 50%;
      padding: 0.25em;
      font-size: 1.7rem;
      transition: var(--ease--in--out--02s);
      color: var(--white-clr);

      &:hover {
        opacity: 0.8;
        transform: scale(0.9);
      }
    }
  }

  @media screen and (min-width: 768px) {
  }
`;

const PersonProfile = ({ person }) => {
  const [tab, setTab] = useState('movies');

  const { setData, clearData, personProfile, setModal } = useContext(
    MovieContext
  );

  useEffect(() => {
    setData(SET_PERSONDATA, person);
    return () => {
      clearData(CLEAR_PERSONDATA);
    };
  }, [person]);

  const knonwFor =
    personProfile &&
    personProfile.combined_credits.cast
      .sort((a, b) => b.vote_count - a.vote_count)
      .slice(0, 8);

  console.log(personProfile);

  return (
    personProfile && (
      <Layout>
        <Styled className='profile'>
          <div className='profile--person pt-5'>
            <img
              src={
                personProfile.profile_path
                  ? `${IMG_URL}${personProfile.profile_path}`
                  : 'no_img.jpg'
              }
              alt={personProfile.name}
            />
          </div>
          <div className='profile--biography px-2'>
            <h2 className='profile--biography__name'>{personProfile.name}</h2>
            <h3 className='subTitle'>Biography</h3>
            <p className='profile--biography__bio'>
              {personProfile.biography.length === 0
                ? 'Sorry Nothing Available'
                : `${personProfile.biography.slice(0, 500)}`}
            </p>
            {personProfile.biography.lenght <= 500 && (
              <a
                href='#'
                onClick={() => setModal(personProfile.biography, 'person')}
                className='read--more'
              >
                <IoIosArrowDown className='read--more__arrow' />
              </a>
            )}
          </div>
          <div className='profile--media'>
            <KnownFor data={knonwFor} />
            <MediaCredits data={personProfile} tab={tab} setTab={setTab} />
          </div>
          <PersonFacts data={personProfile} />
        </Styled>
      </Layout>
    )
  );
};

PersonProfile.getInitialProps = async ctx => {
  console.log(ctx.query, 'ID');
  console.log(ctx);

  try {
    const person = await movieDB(
      `person/${ctx.query.id || '85'}`,
      'append_to_response=movie_credits,tv_credits,combined_credits,external_ids,images&include_image_language=en,null'
    );
    return {
      person: { typeFor: 'person', ...person }
    };
  } catch (error) {
    console.log(error);
  }
};

export default PersonProfile;
