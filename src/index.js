import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import reportWebVitals from './reportWebVitals';
import { Router, Link } from "@reach/router";
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import {theme} from './utils/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Home path="/" />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
