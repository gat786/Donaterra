import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "App";
import HowItWorks from "pages/HowItWorks";

export default function PrimaryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App isServerInfo />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
    </Routes>
  );
}
