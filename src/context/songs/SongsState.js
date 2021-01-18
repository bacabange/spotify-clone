import React, { useReducer } from 'react';
import SongsContext from './songsContext';
import SongsReducer from './songsReducer';
import { get } from '../../utils/api';
import queryString from 'query-string'


const SongState = props => {
  const initialState = {
    all: [],
    isLoading: false,
    query: null,
    url: null,
    pagination: {
      total: 0,
      next: null,
      previous: null,
      offset: 0,
    }
  }

  const [state, dispatch] = useReducer(SongsReducer, initialState);

  const getSongs = async (query, externalURL = null) => {
    dispatch({ type: 'set_query', query });
    dispatch({ type: 'set_songs_loading', isLoading: true });

    try {
      const params = queryString.stringify({
        query,
        type: 'track',
      })
      let url = `https://api.spotify.com/v1/search?${params}`;

      if (externalURL) {
        url = externalURL;
      }

      const result = await get(url);

      console.log("🚀 ~ file: SongsState.js ~ line 21 ~ return ~ result", result)

      dispatch({
        type: 'get_songs_success',
        data: result.tracks.items,
        pagination: {
          total: result.tracks.total,
          next: result.tracks.next,
          previous: result.tracks.previous,
          offset: result.tracks.offset,
        }
      });
    } catch (error) {
      // remove loading
      dispatch({ type: 'get_songs_fail', error });
      console.log('error', error);
    }
  }

  return <SongsContext.Provider
    value={{
      all: state.all,
      query: state.query,
      pagination: state.pagination,
      isLoading: state.isLoading,
      getSongs,
    }}
  >
    {props.children}
  </SongsContext.Provider>;
}

export default SongState;
