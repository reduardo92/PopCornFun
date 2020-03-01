import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SimpleFlex from './SimpleFlex';
import MediaCard from './Cards/MediaCard';
import Link from 'next/link';
import MovieContext from '../context/MovieContext';

const Styled = styled.section`
  padding: 2em 0.5em;

  .head--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tabs--container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .tab {
    color: var(--white-clr);
    border-bottom: 3px solid transparent;
    text-transform: capitalize;
    font-weight: 600;
    padding-bottom: 5px;
    margin-right: 1em;

    &:focus {
      outline: none;
    }
  }

  .activeTab {
    color: #ffffffc4;
    border-bottom: 3px solid var(--primary-clr);
  }

  .simple--flex {
    scroll-snap-points-x: repeat(200px);
    margin-bottom: 1.2em;

    & > div {
      margin: 0 0.5em;
    }

    .vid {
      width: 350px;
    }

    .img {
      width: 200px;
      margin: 0 0.3em;
    }

    & > div:first-child {
      margin-left: 0;
    }
  }
`;

const MediaSection = ({ videos, posters, backdrops, typeId, typeFor }) => {
  const [tab, setTab] = useState('videos');
  const { setModal } = useContext(MovieContext);

  const media = {
    videos,
    posters,
    backdrops
  };
  return (
    <Styled className='media--section'>
      <div className='head--container'>
        <h3 className='subTitle'>Media</h3>
        <div className='tabs--container'>
          <button
            className={`tab ${tab === 'videos' && 'activeTab'}`}
            onClick={() => setTab('videos')}
          >
            videos
          </button>
          <button
            className={`tab ${tab === 'posters' && 'activeTab'}`}
            onClick={() => setTab('posters')}
          >
            posters
          </button>
          <button
            className={`tab ${tab === 'backdrops' && 'activeTab'}`}
            onClick={() => setTab('backdrops')}
          >
            backdrops
          </button>
        </div>
      </div>
      <SimpleFlex className='simple--flex'>
        {media[tab].map(
          (item, i) =>
            i < 8 && (
              <MediaCard
                key={item.id || i}
                data={item}
                typeFor={tab === 'videos' ? 'movie' : ''}
                SetMedia={() =>
                  setModal(tab === 'videos' ? item.key : item.file_path, tab)
                }
                typeFor={tab}
              />
            )
        )}
      </SimpleFlex>
      <Link href='/movie/[id]/media' as={`/movie/${typeId}/media`}>
        <a className='title redHover'>See All Media</a>
      </Link>
    </Styled>
  );
};

export default MediaSection;
