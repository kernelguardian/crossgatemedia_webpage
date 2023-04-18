import React from "react";

export default function Socials() {
  return (
    <div className="flex flex-row-3 justify-center  absolute inset-x-0 bottom-0 pb-24">
      <a
        href="https://www.facebook.com/CrossGateMedia"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="https://raw.githubusercontent.com/kernelguardian/crossgatemedia_webpage/main/src/assets/facebook.png"
          alt="Facebook Icon"
          className="h-12 w-12"
        />
      </a>
      <h1 className="mx-12"></h1>
      <a
        href="https://www.instagram.com/crossgatemedia/?next=%2F"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="https://raw.githubusercontent.com/kernelguardian/crossgatemedia_webpage/main/src/assets/instagram.png"
          alt="Instagram"
          className="h-14 w-14"
        />
      </a>
      <h1 className="mx-12"></h1>
      <a
        href="https://www.youtube.com/channel/UCO1PsUnz-QMxxwvzZWGC0Dw"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="https://raw.githubusercontent.com/kernelguardian/crossgatemedia_webpage/main/src/assets/youtube.png"
          alt="Youtube Icon"
          className="h-14 w-14"
        />
      </a>
    </div>
  );
}
