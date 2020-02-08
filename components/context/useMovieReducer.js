const useMovieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        movieDBData: action.payload
      };
    case 'SET_PAGE_DATA':
      return {
        ...state,
        pageData: action.payload
      };
    case 'SET_PAGE_DATA_UNMOUNT':
      return {
        ...state,
        pageData: {}
      };
    case 'SET_TOTAL_PAGES':
      return {
        ...state,
        total_pages: action.totalPages,
        query: action.newQuery
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        current_page: action.newCurrentPage
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.newQuery
      };
    default:
      return state;
  }
};

export default useMovieReducer;
