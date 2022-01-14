import React from "react";

export default function CausesCard(props: {
  cause: string;
  backgroundColor: string;
}) {
  return (
    <div className="causes-card" style={{ backgroundColor: props.backgroundColor }}>
      {props.cause}
    </div>
  );
}
