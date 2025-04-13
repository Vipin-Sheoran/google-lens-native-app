export const theme = {
  colors: {
    primary: "#202124",
    secondary: "#303134",
    text: "#e8eaed",
    textSecondary: "#969ba1",
    border: "#5f6368",
    accent: "#8ab4f8",
    buttonBg: "#303134",
    cardBg: "#303134",
    dark: "#171717",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px",
  },
  typography: {
    fontFamily: "'Google Sans', 'Roboto', sans-serif",
    sizes: {
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
    },
  },
};

export type Theme = typeof theme;
