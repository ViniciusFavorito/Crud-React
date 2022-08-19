import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
