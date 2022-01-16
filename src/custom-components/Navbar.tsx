import React, { useState } from "react";

import "custom-components/custom-components.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavOptions, setShowNavOptions] = useState<boolean>(false);

  return (
    <nav className="nav-row">
      <Link to="/" className="">
        <h1 className="poppins title">Donaterra</h1>
        <span>Crypto donations</span>
      </Link>

      <div className="nav-card">
        <Link to="/how-it-works">How it works</Link>
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
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li>Start a Fundraiser</li>
            <li>Browse Fundraisers</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
