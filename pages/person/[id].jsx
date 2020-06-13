import { useState } from 'react';
import { IMG_URL } from '../../components/context/types';
import Layout from '../../components/layout';
import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import KnownFor from '../../components/ui/PersonProfile/KnownFor';
import MediaCredits from '../../components/ui/PersonProfile/MediaCredits';
import PersonFacts from '../../components/ui/PersonProfile/PersonFacts';
import Biography from '../../components/ui/PersonProfile/Biography';

const Styled = styled.section`
  background: var(--bg-dark-gradient);
  margin-top: 110px;
  position: relative;

  .profile--person {
    max-width: 300px;
    margin: 0 auto;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .profile--media {
    padding-bottom: 2em;
  }

  .line-between {
    display: none;
    width: 100%;
    background: var(--bg-gradient);
  }

  @media screen and (min-width: 1000px) {
    margin-top: 100px;
    display: grid;
    grid-template-areas:
      'pp bio'
      'lin lin'
      'pf pm';
    grid-template-columns: calc(100% - 60%) 1fr;
    grid-auto-rows: auto 40px auto;
    z-index: 1;

    &::before {
      content: '';
      background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
        url('/theater_sets.jpg') no-repeat center;
      background-color: black;
      min-height: 800px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-size: cover;
      background-position: 0 85%;
      background-attachment: fixed;
      object-fit: cover;
      z-index: -1;
    }

    .profile--person {
      grid-area: pp;
      justify-self: end;
      max-width: 355px;
      margin: 0;
      margin-bottom: 2em;
      z-index: 10;
    }

    .profile--biography {
      grid-area: bio;
    }

    .line-between {
      grid-area: lin;
      display: block;
    }

    .profile--media {
      grid-area: pm;
      background: var(--white-clr);
      padding: 1.2em 0 3em 2em;
    }

    .profile--media--container {
      max-width: 1100px;
    }

    .profile--facts {
      grid-area: pf;
    }
  }
`;

const PersonProfile = ({ person }) => {
  const [tab, setTab] = useState('movies');

  const knonwFor =
    person &&
    person.combined_credits.cast
      .sort((a, b) => b.vote_count - a.vote_count)
      .slice(0, 10);

  console.log('PErson', person);
  return (
    <Layout>
      <Styled className='profile'>
        <div className='profile--person pt-5'>
          <img
            src={
              person.profile_path
                ? `${IMG_URL}${person.profile_path}`
                : 'no_img.jpg'
            }
            alt={person.name}
          />
        </div>
        <Biography name={person.name} bio={person.biography} />
        <div className='line-between' />
        <div className='profile--media'>
          <div className='profile--media--container'>
            <KnownFor data={knonwFor} />
            <MediaCredits data={person} tab={tab} setTab={setTab} />
          </div>
        </div>
        <PersonFacts data={person} />
      </Styled>
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const person = await movieDB(
      `person/${query.id || '85'}`,
      'append_to_response=movie_credits,tv_credits,combined_credits,external_ids,images&include_image_language=en,null'
    );
    return {
      props: {
        person: { typeFor: 'person', ...person },
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default PersonProfile;
