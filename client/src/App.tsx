import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import MainPage from "./pages/MainPage";
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
