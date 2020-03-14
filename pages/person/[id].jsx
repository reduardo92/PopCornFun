import { useContext, useState } from 'react';
import MovieContext from '../../components/context/MovieContext';
import Layout from '../../components/layout';
import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import KnownFor from '../../components/ui/PersonProfile/KnownFor';
import MediaCredits from '../../components/ui/PersonProfile/MediaCredits';
import { IMG_URL } from '../../components/context/types';
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
  console.log(person);
  const [tab, setTab] = useState('movies');
  const { setModal } = useContext(MovieContext);
  const knonwFor = person.combined_credits.cast
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 8);

  return (
    <Layout>
      <Styled className='profile'>
        <div className='profile--person'>
          <img
            src={
              person.profile_path
                ? `${IMG_URL}${person.profile_path}`
                : 'no_img.jpg'
            }
            alt={person.name}
          />
        </div>
        <div className='profile--biography px-2'>
          <h2 className='profile--biography__name'>{person.name}</h2>
          <h3 className='subTitle'>Biography</h3>
          <p className='profile--biography__bio'>
            {person.biography.length === 0
              ? 'Sorry Nothing Available'
              : `${person.biography.slice(0, 500)}...`}
          </p>
          <a
            href='#'
            onClick={() => setModal(person.biography, 'person')}
            className='read--more'
          >
            <IoIosArrowDown className='read--more__arrow' />
          </a>
        </div>
        <div className='profile--media'>
          <KnownFor data={knonwFor} />
          <MediaCredits data={person} tab={tab} setTab={setTab} />
        </div>
        <PersonFacts data={person} />
      </Styled>
    </Layout>
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
