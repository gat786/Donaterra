import React from "react";

import Navbar from "custom-components/Navbar";
import Images from "assets/images.export";

import "./pages.scss";

export default function DonationPage() {
  return (
    <>
      <div className="sections-centered">
        <Navbar />
        <section className="section">
          <div className="image-holder">
            <img
              src={Images.ExampleFRImage}
              className="donation-image"
              alt=""
            />
          </div>
          <div className="donation-main-information">
            <h2 className="donation-title">
              Ali needs your help to fight tumour
            </h2>
            <p className="time-left">26 days left for surgery</p>

            <div className="amount-flex">
              <div>
                <p>Raised</p>
                <p>150,000</p>
              </div>

              <div>
                <p>Goal Amount</p>
                <p>500,000</p>
              </div>
            </div>

            <div className="donate-buttons">
              <button className="donate-button">Donate</button>

              <div className="side-by-side">
                <button className="read-buttons">Check Documents</button>
                <button className="read-buttons">Read Story</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
