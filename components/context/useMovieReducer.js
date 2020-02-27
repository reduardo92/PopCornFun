import { SET_MODAL_MEDIA, RESET_MODAL_MEDIA } from './types';

const useMovieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        movieDBData: action.payload
      };
    case SET_MODAL_MEDIA:
      return {
        ...state,
        isModal: { media: action.payload, toggle: true }
      };
    case RESET_MODAL_MEDIA:
      return {
        ...state,
        isModal: { media: null, toggle: false }
      };

    default:
      return state;
  }
};

export default useMovieReducer;
