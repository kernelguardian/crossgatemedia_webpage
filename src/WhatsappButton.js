import React from "react";
import "./WhatsappButton.css";

export default function WhatsappButton() {
  return (
    <div className="flex flex-col justify-center items-center">
      <button class="rounded-full textStyle bg-buttonBG w-96 h-10">
        Click to talk to us
      </button>
    </div>
  );
}
