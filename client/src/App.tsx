import { ThemeProvider } from "styled-components";
import MainPage from "./pages/MainPage";
import { theme } from "./theme";
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
