import {
  SET_MODAL_MEDIA,
  RESET_MODAL_MEDIA,
  SET_SEARCH_DATA,
  CLEAR_SEARCH_DATA
} from './types';

const useMovieReducer = (state, action) => {
  switch (action.type) {
    // Set Search Data
    case SET_SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload
      };
    // Clear Search Data
    case CLEAR_SEARCH_DATA:
      return {
        ...state,
        searchData: null
      };
    // Set Modal Media
    case SET_MODAL_MEDIA:
      return {
        ...state,
        isModal: { media: action.payload, toggle: true, for: action.typeFor }
      };
    // Clear Modal Media
    case RESET_MODAL_MEDIA:
      return {
        ...state,
        isModal: { media: null, toggle: false, for: null }
      };

    default:
      return state;
  }
};

export default useMovieReducer;
