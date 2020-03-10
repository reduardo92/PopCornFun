import { useContext, useState } from 'react';
import { IMG_URL } from '../../components/context/types';
import movieDB from '../../components/utility/movieDB';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { IoIosArrowDown } from 'react-icons/io';
import MovieContext from '../../components/context/MovieContext';
import SimpleFlex from '../../components/ui/SimpleFlex';
import RecommenCard from '../../components/ui/Cards/RecommenCard';
import groupCrew from '../../components/utility/groupCrew';

const Styled = styled.section`
  background: var(--bg-gradient);
  margin-top: 110px;
  padding: 2em 1em;

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

  .profile--media__credits {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;

    &--content {
      grid-column: 1 / 3;
      margin-top: 1.2em;
    }
  }

  .grouped {
    & > div:first-child {
      padding-top: 0.6em !important;
    }
    & > div:last-child {
      padding-bottom: 0.6em !important;
    }
    .date {
      flex: 0 0 9%;
    }
  }
  /* .knonwFor--content {
    .card--one {
      width: 100%;
      margin: 0 1em;
    }
  } */
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

  const creditsDiv = arry =>
    Object.entries(arry)
      .sort((a, b) => b[0] - a[0])
      .map(([key, value], index) => (
        <div key={index} className='grouped border border-black '>
          {value.map(i => (
            <div
              key={i.id + Math.random() * 10}
              className='d-flex shadow-sm border border-light bg-light py-1 px-2'
            >
              <span className='date text-dark mr-4'>
                <strong>{i.date === '' ? '-' : i.date}</strong>
              </span>
              <span className='text-dark'>
                <strong className='d-block'>{i.title || i.name}</strong>
                {i.job ? `...${i.job}` : i.character ? `as ${i.character}` : ''}
              </span>
            </div>
          ))}
        </div>
      ));

  return (
    <Layout>
      <Styled className='profile'>
        <div className='profile--person'>
          <img src={`${IMG_URL}${person.profile_path}`} alt={person.name} />
        </div>
        <div className='profile--biography'>
          <h2 className='profile--biography__name'>{person.name}</h2>
          <h3 className='subTitle'>Biography</h3>
          <p className='profile--biography__bio'>{`${person.biography.slice(
            0,
            500
          )}...`}</p>
          <a
            href='#'
            onClick={() => setModal(person.biography, 'person')}
            className='read--more'
          >
            <IoIosArrowDown className='read--more__arrow' />
          </a>
        </div>
        <div className='profile--media'>
          <div className='profile--media__knownFor'>
            <h3 className='subTitle'>Known For</h3>
            <SimpleFlex className='knonwFor--content' setWidth='160px'>
              {knonwFor.map(item => (
                <RecommenCard
                  key={item.id}
                  data={item}
                  typeFor={item.media_type}
                />
              ))}
            </SimpleFlex>
          </div>
          <div className='profile--media__credits'>
            <h3 className='subTitle'>Acting</h3>
            <div className='tabs--container'>
              <button
                className={`tab ${tab === 'movies' && 'activeTab'}`}
                onClick={() => setTab('movies')}
              >
                Movies
              </button>
              <button
                className={`tab ${tab === 'tv' && 'activeTab'}`}
                onClick={() => setTab('tv')}
              >
                Tv Shows
              </button>
            </div>
            <div className='profile--media__credits--content table'>
              {tab === 'movies'
                ? creditsDiv(
                    groupCrew(person.movie_credits.cast, 'release_date')
                  )
                : creditsDiv(
                    groupCrew(person.tv_credits.cast, 'first_air_date')
                  )}
            </div>
          </div>
        </div>
        <div className='profile--facts'>
          <h3 className='subTitle'>Facts</h3>
        </div>
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
