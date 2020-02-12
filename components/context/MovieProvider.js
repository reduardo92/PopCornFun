import { useState, useEffect, useRef, useReducer } from 'react';
import MovieContext from './MovieContext';
import useMovieReducer from './useMovieReducer';
import { API_KEY } from './types';

const log = console.log;

const movieInitalState = {
  current_page: 1,
  total_pages: 0,
  query: 'movie',
  movieDBData: {},
  pageData: {}
};

const StateProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState(0);
  const [toggle, setToggle] = useState(false);
  const navRef = useRef();
  const [state, dispatch] = useReducer(useMovieReducer, movieInitalState);

  const setCarosuel = (tablet = 3, laptop = 4, laptopLg = 5) => {
    if (windowSize < 768) {
      return 1;
    } else if (windowSize <= 768 || windowSize < 1280) {
      return tablet;
    } else if (windowSize <= 1280 || windowSize < 2000) {
      return laptop;
    } else if (windowSize >= 2000) {
      return laptopLg;
    }
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  log(process.env.API_KEY);
  log(API_KEY);

  return (
    <MovieContext.Provider
      value={{
        windowSize,
        setCarosuel,
        toggle,
        setToggle,
        navRef,
        ...state
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default StateProvider;
