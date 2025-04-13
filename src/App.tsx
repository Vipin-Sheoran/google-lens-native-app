import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { HomePage } from "./pages/HomePage/HomePage";
import { TextSearch } from "./pages/TextSearch/TextSearch";
import { VoiceSearch } from "./pages/VoiceSearch/VoiceSearch";
import { ImageSearch } from "./pages/ImageSearch/ImageSearch";
import { ImageResults } from "./pages/ImageResults/ImageResults";
import { BottomNav } from "./components/BottomNav/BottomNav";
import styled from "styled-components";

const AppContent = styled.div`
  /* No default padding, will be added conditionally via className */
`;

const AppWithBottomNav = () => {
  const location = useLocation();
  const showBottomNav = location.pathname === "/";

  return (
    <>
      <AppContent className={showBottomNav ? "with-nav" : ""}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/text-search" element={<TextSearch />} />
          <Route path="/voice-search" element={<VoiceSearch />} />
          <Route path="/image-search" element={<ImageSearch />} />
          <Route path="/image-results" element={<ImageResults />} />
        </Routes>
      </AppContent>
      {showBottomNav && <BottomNav />}
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppWithBottomNav />
      </Router>
    </ThemeProvider>
  );
}

export default App;
