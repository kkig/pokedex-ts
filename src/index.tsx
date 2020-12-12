import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

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
    h6: {
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
      fontWeight: 600,
      letterSpacing: '.15em',
    },
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
          fontSize: 14,
          letterSpacing: '.025em',
          lineHeight: 1.5,
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        img: {
          verticalAlign: 'middle',
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
