import React, { useState } from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { Nexticon } from "./Nexticon";

export const FirstStep = ({ handleNextStep, form, setForm }) => {
  const isFirstNameValid = () => {
    if (form.firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(form.firstname))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = () => {
    if (form.lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(form.lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUseNameValid = () => {
    if (form.Username === "") return "Use name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(form.Username))
      return "Usename can only contain lowercase letters and digits only";
  };
  // !/^[a-z0-9]+$/.

  const isHavingError = () => {
    return isFirstNameValid() || isLastNameValid() || isUseNameValid();
  };
  return (
    <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl justify-content-end">
      <div className="space-y-2">
        {/* <Logo /> */}
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
        <div className="flex flex-col justify-between min-h-112.5">
          <div className=" flex flex-col justify-between  min-h-62.5">
            <TextField
              value={form.firstname}
              onChange={(e) => {
                // setFirstname(e.target.value);
                setForm({ ...form, firstname: e.target.value });
              }}
              error={isFirstNameValid()}
              required={true}
              label="First name"
              placeholder="John..."
            />

            <TextField
              value={form.lastname}
              onChange={(e) => {
                setForm({ ...form, lastname: e.target.value });
              }}
              error={isLastNameValid()}
              required={true}
              label="Last name"
              placeholder="Doe..."
            />

            <TextField
              value={form.Username}
              onChange={(e) => {
                setForm({ ...form, Username: e.target.value });
              }}
              error={isUseNameValid()}
              required={true}
              label="Use name"
              placeholder="Jon"
            />
          </div>
        </div>
        <Button
          className="max-w-104 flex flex-col content-end justify-end"
          onClick={handleNextStep}
          disabled={isHavingError()}
        >
          <Nexticon />
        </Button>
      </div>
    </div>
  );
};
