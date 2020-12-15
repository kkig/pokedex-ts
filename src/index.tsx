import React from 'react';
import ReactDOM from 'react-dom';

// import styled from 'styled-components';

// import { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: #333333;
//     box-sizing: border-box;
//     margin: 0;
//     height: 100vh;
//     background-color: gainsboro;
//     font-size: 14;
//     letter-spacing: 0.025em;
//     line-height: 1.5;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     font-family: 'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI',
//       'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif';
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     font-family: 'Nunito', 'sans-serif';

//     font-weight: 600;
//     letter-spacing: 0.15em;
//   }

//   img {
//     vertical-align: middle;
//   }
// `;

import App from './App';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#87cefa',
    },

    text: {
      primary: '#333333',
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    body2: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
  },

  overrides: {
    MuiAppBar: {
      colorPrimary: { color: '#fff' },
    },
    MuiButton: {
      containedPrimary: { color: '#fff' },
    },
    MuiIcon: {
      colorPrimary: { color: '#fff' },
    },

    MuiCssBaseline: {
      '@global': {
        html: {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
          height: '100vh',
          width: '100%',
          backgroundColor: 'gainsboro',
          fontSize: 14,
          letterSpacing: '.025em',
          lineHeight: 1.5,
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',

          fontFamily: ['Open Sans', 'sans-serif'].join(','),
        },
        img: {
          verticalAlign: 'middle',
        },
      },
    },
  },
});

ReactDOM.render(
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={myTheme}>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
