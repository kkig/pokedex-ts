import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import myTheme from './shared/theme/my-theme';

import App from './shared/App/App';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: aliceblue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    line-height: 1.2;
    width: 100%;
    min-height: 100vh; 
    display: flex;   
    font-size: ${myTheme.fontSize.bodyText};
    font-family: ${myTheme.fontFamily.primary};

    vertical-align: baseline;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
