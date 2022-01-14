import Icons from "assets/icons.export";
import React from "react";

export default function FeatureCard(props: {
  featureTitle: string;
  featureIcon: string;
}) {
  return (
    <div className="feature-card">
      <div className="image-bg">
        <img className="image" src={props.featureIcon} alt="" />
      </div>
      <h3>{props.featureTitle}</h3>
    </div>
  );
}
