import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./utils/routes";
import LandingPage from "./pages/landing_page";
import PartnerPage from "./pages/partner_page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter basename="/">
      <Routes>
        <Route path={paths.HOME} element={<LandingPage />} />
        <Route path={paths.PARTNER} element={<PartnerPage />} />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
