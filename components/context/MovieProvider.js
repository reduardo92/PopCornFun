import { useState, useEffect, useRef, useReducer } from 'react';
import MovieContext from './MovieContext';
import useMovieReducer from './useMovieReducer';
import { SET_MODAL_MEDIA, SET_SEARCH_DATA, SET_CURRENT_PAGE } from './types';
import movieDB from '../utility/movieDB';

const log = console.log;

const movieInitalState = {
  searchQuery: '',
  searchData: null,
  pageData: {},
  isModal: { media: null, toggle: false, for: null },
  currentPage: 1,
  itemPerPage: 20,
  total_pages: null
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
  }, [windowSize]);

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

  // Get current posts
  const indexOfLastPost = state.currentPage * state.itemPerPage;
  const indexOfFirstPost = indexOfLastPost - state.itemPerPage;

  // Change page
  const paginate = pageNumber =>
    dispatch({ type: SET_CURRENT_PAGE, payload: pageNumber });

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
        paginate,
        ...state
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default StateProvider;
