import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./utils/routes";
import LandingPage from "./pages/landing_page";
import PartnerPage from "./pages/partner_page";
import AgendaPage from "./pages/agenda_page";
import BuyTicket from "./pages/buy_ticket_page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter basename="/">
      <Routes>
        <Route path={paths.HOME} element={<LandingPage />} />
        <Route path={paths.PARTNER} element={<PartnerPage />} />
        <Route path={paths.AGENDA} element={<AgendaPage />} />
        <Route path={paths.TICKET} element={<BuyTicket />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
