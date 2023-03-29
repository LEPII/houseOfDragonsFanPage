import React from "react";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/app.css";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Regions from "./pages/Regions";
import Organizations from "./pages/Organizations";
import Donate from "./pages/Donate";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app_container">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/donate" element={<Donate />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
};

export default App;
