import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import {theme} from './utils/theme'

import SongsState from './context/songs/SongsState';
import AuthState from './context/auth/AuthState';
import Routes from "./routes";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthState>
        <SongsState>
          <Routes />
        </SongsState>
      </AuthState>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
