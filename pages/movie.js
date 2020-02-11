import React, { useContext } from 'react';
import PopularSection from '../components/ui/PopularSection';
import MovieContext from '../components/context/MovieContext';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../components/context/types';

const movie = props => {
  console.log(props);
  return (
    <div>
      Hello
      <PopularSection />
    </div>
  );
};

movie.getInitialProps = async ctx => {
  const { data } = await axios.get(`${BASE_URL}movie/now_playing?${API_KEY}`);
  return { data: data.results };
};
export default movie;
