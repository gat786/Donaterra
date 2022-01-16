import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "App";
import HowItWorks from "pages/HowItWorks";
import DonationPage from "pages/DonationPage";

export default function PrimaryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App isServerInfo />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/example-donation" element={<DonationPage />} />
    </Routes>
  );
}
