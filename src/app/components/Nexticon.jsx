import React from "react";
import { Register } from "./Register";

export const Nexticon = ({ setStep }) => {
  return (
    <div className="flex items-center justify-center">
      <p className="w-10 flex">`Continue ${setStep} / 3`</p>
      <img className="w-7" src="/next2.svg" alt="" />
    </div>
  );
};
