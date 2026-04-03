import React, { useState } from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";

export const SecondStep = ({ handleNextStep, handlePrevStep }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = () => {
    if (email === "") return "Email cannot be empty...";
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email))
      return "Email is not valid.";
  };
  const isPhonenumberValid = () => {
    if (phone === "") return "Phone cannot be empty...";
    if (!/^[0-9]{8}$/.test(phone)) return "Phone is not valid.";
  };
  const isPasswordValid = () => {
    // isPasswordValid = s;
    if (password === "") return "Password cannot be empty...";
    if (!/^.{8,}$/.test(password)) return "Password is not valid.";
  };
  const isHavingError = () => {
    return isEmailValid() || isPhonenumberValid() || isPasswordValid();
  };
  return (
    <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl">
      <div className="space-y-2">
        {/* <Logo /> */}
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
        <div className="flex flex-col justify-between min-h-112.5">
          <div className=" flex flex-col justify-between  min-h-62.5">
            <TextField
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={isEmailValid()}
              required={true}
              label="Email"
              placeholder="sbatmagnai2...."
            />

            <TextField
              value={phone}
              onChange={(e) => {
                setPhonenumber(e.target.value);
              }}
              error={isPhonenumberValid()}
              required={true}
              label="Phone"
              placeholder="85139..."
            />

            <TextField
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              error={isPasswordValid()}
              required={true}
              label="Password"
              placeholder="#..."
            />
          </div>
        </div>
        <div className="flex justify-between   ">
          <Button className="w-[128px]" onClick={handlePrevStep}>
            Prev
          </Button>
          <Button
            className="w-[280px]"
            onClick={handleNextStep}
            disabled={isHavingError()}
          >
            NEXT
          </Button>
        </div>
      </div>
    </div>
  );
};
