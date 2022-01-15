import React from "react";
import "custom-components/custom-components.scss";
import Images from "assets/images.export";

export default function MainContent() {
  return (
    <div className="maincontent">
      <div>
        <div className="section-heading">Save a Life with Crypto</div>
        <ul typeof="circle" className="list-features">
          <li>0% Platform fees</li>
          <li>Provides details of each and every transaction </li>
          <li>Fundraisers Accessible to global audiences</li>
        </ul>
        <button>Donate Now</button>
      </div>
      <div>
        <img
          className="main-component-image"
          src={Images.MainContentImage}
          alt=""
        />
      </div>
    </div>
  );
}
