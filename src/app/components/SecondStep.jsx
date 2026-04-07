import React, { useState } from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { Nexticon } from "./Nexticon";
import { Previcon } from "./Previcon";
import { Logo } from "./Logo";

export const SecondStep = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  // isHavingError,
}) => {
  // const [email, setEmail] = useState("");
  // const [phone, setPhonenumber] = useState("");
  // const [password, setPassword] = useState("");

  const isEmailValid = () => {
    if (form.email === "") return "Email cannot be empty...";
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email))
      return "Plaese provide a valid email address";
  };
  const isPhonenumberValid = () => {
    if (form.phone === "") return "Phone cannot be empty...";
    if (!/^[0-9]{8}$/.test(form.phone))
      return "Please enter a valid phone number";
  };
  const isPasswordValid = () => {
    // isPasswordValid = s;
    if (form.password === "") return "Password cannot be empty...";
    if (!/^.{8,}$/.test(form.password))
      return "Password must include letters and numbers";
  };
  const isPassword2Valid = () => {
    // isPasswordValid = s;
    if (form.password2 !== form.password) return "Password cannot be empty...";
    if (!/^.{8,}$/.test(form.password2))
      return "Password do not match. Plase try again";
  };
  // const Passincorrect = () => {
  // return (isHavingError = () => {
  //   if (password !== password2)
  //      return
  //     disabled={isHavingError()};
  // });

  const isHavingError = () => {
    return (
      isEmailValid() ||
      isPhonenumberValid() ||
      isPasswordValid() ||
      isPassword2Valid()
    );
  };

  return (
    <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl">
      <Logo />
      <div className="space-y-2">
        {/* <Logo /> */}
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
        <div className="flex flex-col justify-between min-h-112.5">
          <div className=" flex flex-col justify-between  min-h-62.5 gap-4">
            <TextField
              value={form.email}
              onChange={(e) => {
                // setEmail(e.target.value);
                setForm({ ...form, email: e.target.value });
              }}
              error={isEmailValid()}
              required={true}
              label="Email"
              placeholder="sbatmagnai2...."
            />

            <TextField
              value={form.phone}
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              error={isPhonenumberValid()}
              required={true}
              label="Phone"
              placeholder="85139..."
            />

            <TextField
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              error={isPasswordValid()}
              required={true}
              label="Password"
              placeholder="#..."
            />

            <TextField
              value={form.password2}
              onChange={(e) => {
                setForm({ ...form, password2: e.target.value });
              }}
              error={isPassword2Valid()}
              required={true}
              label="Confirm password"
              placeholder="#..."
            />
          </div>
        </div>
        <div className="flex justify-between   ">
          <Button className="w-32" onClick={handlePrevStep}>
            <Previcon />
          </Button>
          <Button
            className="w-70"
            onClick={handleNextStep}
            disabled={isHavingError()}
          >
            <Nexticon />
          </Button>
        </div>
      </div>
    </div>
  );
};
