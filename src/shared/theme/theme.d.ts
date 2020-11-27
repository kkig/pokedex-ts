import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakPoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      primary: string;
      secondary: string;
      primaryText: string;
    };

    fontFamily: {
      heading: string;
      primary: string;
    };

    fontSize: {
      bodyText: number | string;
    };
  }
}
