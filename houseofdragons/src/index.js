import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Regions from "./pages/Regions";
import Organizations from "./pages/Organizations";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="regions" element={<Regions />} />
        <Route path="organizations" element={<Organizations />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
