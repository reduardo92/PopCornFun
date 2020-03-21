import { useState, useEffect, useRef, useReducer } from 'react';
import MovieContext from './MovieContext';
import useMovieReducer from './useMovieReducer';
import { SET_MODAL_MEDIA, SET_SEARCH_DATA, CLEAR_SEARCH_DATA } from './types';
import movieDB from '../utility/movieDB';

const log = console.log;

const movieInitalState = {
  searchQuery: null,
  searchData: null,
  pageData: {},
  isModal: { media: null, toggle: false, for: null }
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

  // Actions

  const setData = (type, data) => dispatch({ type, payload: data });

  const setModal = (data, typeFor = 'videos') =>
    dispatch({ type: SET_MODAL_MEDIA, payload: data, typeFor });

  const clearData = type => dispatch({ type });

  const getSearchData = async search => {
    try {
      const { results } = await movieDB(
        'search/multi',
        `page=1&include_adult=false&query=${search}`
      );
      dispatch({ type: SET_SEARCH_DATA, payload: results });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);
  return (
    <MovieContext.Provider
      value={{
        windowSize,
        setCarosuel,
        toggle,
        setToggle,
        setData,
        setModal,
        clearData,
        navRef,
        getSearchData,
        ...state
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default StateProvider;
