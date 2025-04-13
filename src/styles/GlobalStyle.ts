import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  #root {
    min-height: 100vh;
    width: 100%;
  }

  .with-nav {
    padding-bottom: 56px; /* Same as bottom nav height */
    
    @media (min-width: 1024px) {
      padding-bottom: 0; /* Remove padding on desktop */
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  input {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
