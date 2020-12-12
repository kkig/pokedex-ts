import React from 'react';
// import './App.css';

import styled from 'styled-components';
import myTheme from './shared/theme/my-theme';

// Styles
export const Container = styled.main`
  width: 100%;
  height: 100%;
`;

export const Heading = styled.span`
  color: ${myTheme.colors.primaryText};
  font-family: ${myTheme.fontFamily.heading};
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  margin: 0;
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
