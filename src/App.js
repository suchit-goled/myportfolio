import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import Certificates from "./Certificates";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/certificates"
          element={<Certificates />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;