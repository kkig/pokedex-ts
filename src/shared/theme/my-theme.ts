import { DefaultTheme } from 'styled-components';

// const theme: DefaultTheme = {
//   colors: {
//     primary: 'lightgray',
//     secondary: 'blue',
//     primaryText: 'gainsboro',
//   },
// };

// export default { theme };

const myTheme: DefaultTheme = {
  breakPoints: {
    mobile: '40em',
    tablet: '52em',
    desktop: '64em',
  },

  colors: {
    primary: 'lightgray',
    secondary: 'blue',
    bodyText: '#212121',
  },

  fontFamily: {
    heading: 'Nunito, sans-serif',
    primary: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
  },

  fontSize: {
    bodyText: '16px',
  },
};

export default myTheme;
