import 'styled-components';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module 'styled-compoents' {
  export interface DefaultTheme extends Theme {
    palette: {
      primary: {
        main: string;
      };

      text: {
        primary: string;
      };
    };
    typography: {
      fontFamily: string[];
      body2: {
        fontFamily: string[] | string;
      };
    };
  }
}
