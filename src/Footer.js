import React from "react";
import "./App.css";

export const Footer = () => {
  return (
    <div className="footerText flex flex-col items-center justify-center">
      <img
        className="rounded-full mx-auto"
        src="assets/CGM.png"
        alt="Logo for crossgatemedia"
      ></img>

      <h2>©2023 Crossgatemedia Team</h2>
    </div>
  );
};
