import React from "react";
import "./App.css";

export const Footer = () => {
  return (
    <div className="footerText flex flex-col items-center justify-center pb-4 absolute inset-x-0 bottom-0">
      <img
        src="https://raw.githubusercontent.com/kernelguardian/crossgatemedia_webpage/main/src/assets/CGM.png"
        className="h-12 w-24 footerLogo"
        alt="Logo for crossgatemedia"
      ></img>

      <h2>©2023 Crossgatemedia Team</h2>
    </div>
  );
};
