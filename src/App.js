import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import Certificates from "./Certificates";
import "./App.css";
import BandageProject from "./BandageProject";


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

        <Route
          path="/project/ai-smart-bandage"
          element={<BandageProject />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;