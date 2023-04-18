import React from "react";
import "./WhatsappButton.css";
import Whatsappicon from "./assets/Whatsappicon.svg";

export default function WhatsappButton() {
  return (
    <div className="flex flex-row justify-center items-center pt-4">
      <a
        href="https://wa.me/+447570299154"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="rounded-full bg-buttonBG w-96 h-12 hover:bg-sky-700 active:border-2 border-white">
          <span className="inline-flex items-baseline text-white">
            <img
              src={Whatsappicon}
              alt="Whatsapp Icon"
              className="self-center w-8 h-8 pr-1"
            />
            <span className="pt-1 pl-2">Can't wait? Come talk to us</span>
          </span>
        </button>
      </a>
    </div>
  );
}
