import React from 'react';
// import './App.css';

import styled from 'styled-components';
import myTheme from '../theme/my-theme';

// const GlobalStyle = createGlobalStyle`
//   h1 {
//     margin: 0;
//     background-color: 'gainsboro';
//   }
// `;

export const Container = styled.main`
  width: 100%;
  height: 100%;
`;

export const Heading = styled.h1`
  color: ${myTheme.colors.bodyText};
  font-family: ${myTheme.fontFamily.heading};
  letter-spacing: 0.25rem;
`;

const App: React.FC = () => {
  return (
    <Container className='App'>
      <header className='App-header'>
        <Heading>Pokédex</Heading>
      </header>
    </Container>
  );
};

export default App;
