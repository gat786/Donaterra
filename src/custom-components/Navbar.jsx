import React from "react";

import "custom-components/custom-components.scss";

export default function Navbar() {
  return (
    <nav className="nav-row">
      <div className="">
        <h1 className="poppins title">Donaterra</h1>
        <span>Crypto donations</span>
      </div>

      <div className="nav-card">
        <a>How it works</a>
        <a>Start a Fundraiser</a>
        <a>Browse Fundraisers</a>
      </div>

      <div className="text-xl text-center font-semibold">
        Connect <br /> Wallet
      </div>
    </nav>
  );
}
