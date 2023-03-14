import React from "react";
import "../css/nav.css";

export default function TopHead(props) {
  return (
    <>
      <div className="topHead">
        <h2>{props.headContent}</h2>
      </div>
    </>
  );
}
