import { SET_MODAL_MEDIA, RESET_MODAL_MEDIA } from './types';

const useMovieReducer = (state, action) => {
  switch (action.type) {
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
