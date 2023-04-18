import React from "react";
import "./WhatsappButton.css";
import Whatsappicon from "/workspaces/crossgatemedia_webpage/src/assets/Whatsappicon.svg";

export default function WhatsappButton() {
  return (
    <div className="flex flex-row justify-center items-center pt-4">
      <button className="rounded-full bg-buttonBG w-96 h-12 hover:bg-sky-700">
        <span class="inline-flex items-baseline">
          <img
            src={Whatsappicon}
            alt="Whatsapp Icon"
            class="self-center w-8 h-8 pr-1"
          />
          <span className="pt-1 pl-2">Can't wait? Come talk to us</span>
        </span>
      </button>
    </div>
  );
}
