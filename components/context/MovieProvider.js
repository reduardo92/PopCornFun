import { useState, useEffect, useRef, useReducer } from 'react';
import MovieContext from './MovieContext';
import useMovieReducer from './useMovieReducer';

const movieInitalState = {
  apiKey: process.env.apiKey,
  baseUrl: 'https://api.themoviedb.org/3/',
  current_page: 1,
  total_pages: 0,
  query: 'movie',
  movieDBData: {},
  pageData: {}
};

const StateProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [navheight, setNavHeight] = useState(null);
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

  useEffect(() => {
    setNavHeight(navRef.current.scrollHeight);
    window.addEventListener('scroll', () => {
      if (window.scrollY > navheight) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, [navheight]);

  return (
    <MovieContext.Provider
      value={{
        windowSize,
        setCarosuel,
        toggle,
        setToggle,
        navScroll,
        navRef
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default StateProvider;
