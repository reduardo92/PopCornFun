import { useState, useEffect, useRef, useReducer } from 'react';
import MovieContext from './MovieContext';
import useMovieReducer from './useMovieReducer';

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

  const setCarosuel = (phone = 2, tablet = 4, laptop = 5, laptopLg = 7) => {
    if (windowSize < 768) {
      return phone;
    } else if (windowSize <= 768) {
      return tablet;
    } else if (windowSize <= 1024 || windowSize < 2000) {
      return laptop;
    } else if (windowSize >= 2000) {
      return laptopLg;
    }
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

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
