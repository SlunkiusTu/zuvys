import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sectors from "./features/sectors/Sectors";
import Sector from "./features/sector/Sector";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Sectors />} />
        <Route path="/sectors/:sectorId" element={<Sector />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
