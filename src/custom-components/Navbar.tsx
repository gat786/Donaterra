import React, { useState } from "react";

import "custom-components/custom-components.scss";

export default function Navbar() {
  const [showNavOptions, setShowNavOptions] = useState<boolean>(false);

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

      <div className="side-options">
        <div className="flyout-parent">
          <p className="connect-wallet">
            Connect <br /> Wallet
          </p>
          <button
            onClick={() => {
              setShowNavOptions((currentValue) => !currentValue);
            }}
          >
            <i className="material-icons">menu</i>
          </button>

          <ul
            className={`options-flyout ${
              showNavOptions && "options-flyout-visible"
            }`}
          >
            <li>How it works</li>
            <li>Start a Fundraiser</li>
            <li>Browse Fundraisers</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
