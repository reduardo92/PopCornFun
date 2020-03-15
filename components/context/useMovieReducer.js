import {
  SET_MODAL_MEDIA,
  RESET_MODAL_MEDIA,
  SET_MEDIADATA,
  CLEAR_MEDIADATA,
  SET_PERSONDATA,
  CLEAR_PERSONDATA
} from './types';

const useMovieReducer = (state, action) => {
  switch (action.type) {
    // Set Media for tv & movie profile
    case SET_MEDIADATA:
      return {
        ...state,
        mediaProfile: action.payload
      };
    // Clear Media for tv & movie profile
    case CLEAR_MEDIADATA:
      return {
        ...state,
        mediaProfile: null
      };
    // Set Person Data profile
    case SET_PERSONDATA:
      return {
        ...state,
        personProfile: action.payload
      };
    // Clear Person Data profile
    case CLEAR_PERSONDATA:
      return {
        ...state,
        personProfile: null
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
