import Images from "assets/images.export";
import React from "react";

import styles from "custom-components/custom-components.scss";
import { Link } from "react-router-dom";

export default function FundRaiserCard() {
  return (
    <div className="frc">
      <div className="frc-bg">
        <img src={Images.ExampleFRImage} className="frc-image" alt="" />
        <div className="title-subtitle">
          <h3>Aditya needs your help for brain tumour</h3>
          <p>20 days left for surgery</p>
        </div>
        <div className="frc-row">
          <div>
            <p className="text-gray">Raised Amount</p>
            <p>20,000</p>
          </div>
          <div>
            <p className="text-gray">Goal Amount</p>
            <p>100,000</p>
          </div>
        </div>

        <Link to="/example-donation">Donate</Link>
      </div>
    </div>
  );
}
