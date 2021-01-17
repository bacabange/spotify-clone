
const songsReducer = (state, action) => {
  switch (action.type) {
    // Global
    case 'get_songs':
      return {
        ...state,
        loadingSongs: true,
      };
    case 'get_songs_success':
      return {
        ...state,
        // globalStats: action.payload,
        loadingSongs: false,
      };
    case 'get_songs_fail':
      return {
        ...state,
        // globalStats: action.payload,
        loadingSongs: false,
      };
    default:
      return state;
  }
}

export default songsReducer;