import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      textSecondary: string;
      border: string;
      accent: string;
      buttonBg: string;
      cardBg: string;
      dark: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    typography: {
      fontFamily: string;
      sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
  }
}
