import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import Routes from "./Routes";
import theme from "./styles/theme";

import "../src/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ToastContainer />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
