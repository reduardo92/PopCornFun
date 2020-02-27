import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SimpleFlex from './SimpleFlex';
import MediaCard from './Cards/MediaCard';
import Link from 'next/link';
import MovieContext from '../context/MovieContext';

const Styled = styled.section``;

const MediaSection = ({
  data,
  videos,
  posters,
  backdrops,
  typeId,
  typeFor
}) => {
  const [tab, setTab] = useState('videos');
  const { setData } = useContext(MovieContext);

  return (
    <Styled className='media--section'>
      <h3 className='subTitle'>Top Billed Cast</h3>
      <div className='tabs--container'>
        <button className='tab' onClick={() => setTab('videos')}>
          videos
        </button>
        <button className='tab' onClick={() => setTab('posters')}>
          posters
        </button>
        <button className='tab' onClick={() => setTab('backdrops')}>
          backdrops
        </button>
      </div>
      <SimpleFlex>
        {data.videos.results.map(item => (
          <MediaCard
            key={item.id}
            data={item}
            typeFor={tab === 'videos' ? 'movie' : ''}
            SetMedia={() => setData(item.key)}
          />
        ))}
      </SimpleFlex>

      <Link href='/movie/[id]/media' as={`/movie/${typeId}/media`}>
        <a className='title redHover'>See All Media</a>
      </Link>
    </Styled>
  );
};

export default MediaSection;
