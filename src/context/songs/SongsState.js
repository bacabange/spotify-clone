import React, { useReducer } from 'react';
import axios from 'axios';
import SongsContext from './songsContext';
import SongsReducer from './songsReducer';


const AuthState = props => {
  const initialState = {
    all: [],
    loadingSongs: false,
  }

  const [state, dispatch] = useReducer(SongsReducer, initialState);

  const getSongs = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };

    try {
      dispatch({ type: 'get_songs' });

      const res = await axios.get('https://corona.lmao.ninja/all', config);

      dispatch({
        type: 'get_songs_success',
        payload: res.data,
      });

    } catch (error) {
      dispatch({
        type: 'get_songs_fail',
        payload: error.response.data,
      });
    }
  }

  return <SongsContext.Provider
    value={{
      all: state.all,
      loadingSongs: state.loadingSongs,
      getSongs,
    }}
  >
    {props.children}
  </SongsContext.Provider>;
}

export default AuthState;
