// import './App.css';

import Container from '@material-ui/core/Container';
import Cards from './components/Cards';

import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const AppContainer = styled(Container)`
  width: 100%;
  height: 100vh;

  header {
    padding-top: 5rem;
  }
`;

const AppTitle = styled(Typography)`
  letter-spacing: 0.25rem;
  font-weight: 600;
`;

// Styles
// export const Container = styled.main`
//   width: 100%;
//   height: 100%;
// `;

// export const Heading = styled.span`
//   color: ${myTheme.colors.primaryText};
//   font-family: ${myTheme.fontFamily.heading};
//   font-size: 1.75rem;
//   font-weight: 600;
//   letter-spacing: 0.25rem;
//   margin: 0;
// `;

// https://pokeapi.co/api/v2/pokemon?offset=10&limit=10

const App: React.FC = () => {
  return (
    <AppContainer>
      <header className='App-header'>
        <AppTitle variant='h4' align='center'>
          Pokédex
        </AppTitle>
      </header>

      <main>
        <Cards />
      </main>
    </AppContainer>
  );
};

export default App;
