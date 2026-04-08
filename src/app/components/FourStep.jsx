import React, { useState } from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { Nexticon } from "./Nexticon";
import { Logo } from "./Logo";

export const FourStep = ({ handleNextStep, form, setForm }) => {
  //   const isFirstNameValid = () => {
  //     if (form.firstname === "") return "First name cannot be empty...";
  //     if (!/^[A-Za-z-]+$/.test(form.firstname))
  //       return "First name cannot contain special characters or numbers.";
  //   };

  return (
    <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl justify-content-end">
      <Logo />
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl">You're All Set 🔥</h1>
        <p className="text-lg text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
        <div className="flex flex-col justify-between min-h-112.5 rounded-lg overflow-hidden">
          <img src="aaa.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
