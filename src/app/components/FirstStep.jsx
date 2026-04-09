import React, { useState } from "react";
import { TextField } from "./TextField";
import { Logo } from "./Logo";
import { Button2 } from "./Button2";

export const FirstStep = ({
  handleNextStep,
  form,
  setForm,
  errors,
  setErrors,
  step,
}) => {
  const isFirstNameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = (value) => {
    if (value === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUseNameValid = (value) => {
    if (value === "") return "Use name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "Usename can only contain lowercase letters and digits only";
  };
  // !/^[a-z0-9]+$/.

  const isHavingError = () => {
    return (
      isFirstNameValid(form.firstname) ||
      isLastNameValid(form.lastname) ||
      isUseNameValid(form.Usename)
    );
  };
  return (
    <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl justify-content-end">
      <Logo />
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
                setErrors({
                  ...errors,
                  firstname: isFirstNameValid(e.target.value),
                });
                setForm({ ...form, firstname: e.target.value });
              }}
              error={errors.firstname}
              required={true}
              label="First name"
              placeholder="John . . ."
            />

            <TextField
              value={form.lastname}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  lastname: isLastNameValid(e.target.value),
                });
                setForm({ ...form, lastname: e.target.value });
              }}
              error={errors.lastname}
              required={true}
              label="Last name"
              placeholder="Doe . . ."
            />

            <TextField
              value={form.Username}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  Usename: isUseNameValid(e.target.value),
                });
                setForm({ ...form, Username: e.target.value });
              }}
              error={errors.Usename}
              required={true}
              label="Use name"
              placeholder="Jon . . ."
            />
          </div>
        </div>
        <Button2
          onClick={handleNextStep}
          disabled={isHavingError()}
          step={step}
        ></Button2>
      </div>
    </div>
  );
};
