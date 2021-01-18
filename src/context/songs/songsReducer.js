
const songsReducer = (state, action) => {
  switch (action.type) {
    // Global
    case 'set_songs_loading':
      return {
        ...state,
        all: [],
        isLoading: action.isLoading,
      };
    case 'get_songs_success':
      return {
        ...state,
        all: action.data,
        pagination: action.pagination,
        isLoading: false,
      };
    case 'get_songs_fail':
      return {
        ...state,
        isLoading: false,
      };
    case 'set_query':
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
}

export default songsReducer;