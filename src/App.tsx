import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
